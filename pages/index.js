import styles from '../styles/Home.js'
import Head from 'next/head'
import api from '../services/api';
import { useEffect, useState, useRef } from 'react'

import Slider from '../components/Slider'

export default function Home() {
  const [ musics, setMusics ] = useState([]);
  const [ albums, setAlbums ] = useState([]);
  const [ artists, setArtists ] = useState([]);
  const [ slides, setSlides ] = useState([]);
  const [ current_slideid, setCurrentSlideId ] = useState(0);
  const [ music_state, setMusicState ] = useState({
    music_url: null,
    duration: 0,
    currentTime: 0,
    paused: true,
  });

  const musicRef = useRef(null);

  useEffect(async () => {
    let musics_data = await api.get('api/musics');
    let albums_data = await api.get('api/albums');
    let artists_data = await api.get('api/artists');
    console.log('musics_data: ', musics_data.data);
    console.log('albums_data: ', albums_data.data);
    console.log('artists_data: ', artists_data.data);

    if(!!musics_data)
      setMusics(musics_data.data);
    if(!!albums_data) {
      setAlbums(albums_data.data);
      setSlides(albums_data.data.filter((_, key) => (key <= 3)));
    }
    if(!!artists_data)
      setArtists(artists_data.data);

  },[]);

  const updateMusicState = () => {
    setMusicState({
      music_url: musicRef.current.src,
      duration: Number(musicRef.current.duration),
      currentTime: musicRef.current.currentTime,
      paused: false,
    });
  }

  const updateMusicCurrentTime = (time) => {
    if(time > music_state.duration || time < 0)
      return false
    
    musicRef.current.currentTime = time
  }

  const playMusic = async (music_url) => {
      musicRef.current.src = `${music_url}`;
      await musicRef.current.play();
      updateMusicState();
      let interval = setInterval(() => updateMusicState(), 1000);
  }

  const secondsToMinutes = (seconds) => {
    let min = Math.floor(seconds / 60);
    let sec = String(seconds % 60).substring(0,1);
    return `${min}:${sec < 10? `0${sec}` : sec}`;
  }

  return (
    <>
      <Head>
        <title>Music club</title>
      </Head>
      <header style={{...styles.header,...styles.right}}>
        <input 
          type="text" 
          className="serach" 
          placeholder="Search your entertainment" 
          style={styles.searchInput}
        />
      </header>
      <nav style={{...styles.left, ...styles.nav}}>
        <span style={{...styles.logo}}>
          <a href="#">
            <img src="/logo.png" alt="logo"/>
          </a>
        </span>
        <ul style={{...styles.nav_list}}>
          <a href="#" className="discover">
            <li style={{...styles.nav_list_item, filter: 'unset', opacity: 1}}>
                <img src="/discover.png" alt="discover" style={{...styles.nav_list_item_img}}/>
                <span>Discover</span>
            </li>
          </a>
          <a href="#" className="songs">
            <li style={{...styles.nav_list_item}}>
                <img src="/songs.png" alt="songs" style={{...styles.nav_list_item_img}}/>
                <span>Songs</span>
            </li>
          </a>
          <a href="#" className="albums">
            <li style={{...styles.nav_list_item}}>
                <img src="/albums.png" alt="albums" style={{...styles.nav_list_item_img}}/>
                <span>Albums</span>
            </li>
          </a>
          <a href="#" className="artists">
            <li style={{...styles.nav_list_item}}>
                <img src="/artists.png" alt="artists" style={{...styles.nav_list_item_img}}/>
                <span>Artists</span>
            </li>
          </a>
          <a href="#" className="youtube">
            <li style={{...styles.nav_list_item}}>
                <img src="/youtube.png" alt="youtube" style={{...styles.nav_list_item_img}}/>
                <span>Youtube</span>
            </li>
          </a>
        </ul>
      </nav>
      <main style={{...styles.right}}>
          <Slider slides={slides} />

          <div style={{...styles.main}}>

            <section style={{...styles.section}}>
              <h3 style={{...styles.section_title}}>Featured Tracks</h3>
              <ul className="hide-scrollbar" style={{...styles.featured_items}}>
                {albums.map(element => (
                  <li style={{...styles.featured_item, cursor: 'pointer'}}>
                    <div style={{
                      ...styles.featured_item_image, 
                      backgroundImage: `url(${element.image_url})`
                    }}></div>
                    <h4 style={{...styles.section_subtitle}}>{ element.album }</h4>
                    <span  style={{fontSize: 10, color: 'rgba(15, 30, 54, .5)'}}>{ element.artist.name }</span>
                  </li>
                ))}
              </ul>
            </section>

            <section style={{...styles.section, padding: 22}}>
              <h3 style={{...styles.section_title}}>Top Tracks</h3>
              <ul className="hide-scrollbar" style={{...styles.tracks}}>
                <li style={{...styles.track}}>
                  <span style={{...styles.section_subtitle, flex: 1}}><h4>#</h4></span>
                  <span style={{...styles.section_subtitle, flex: 1}}><h4>Song</h4></span>
                  <span style={{...styles.section_subtitle, flex: 1}}><h4>Artist</h4></span>
                  <span style={{...styles.section_subtitle, flex: 1}}><h4>Plays</h4></span>
                  <span style={{...styles.section_subtitle, flex: 1}}><h4>Time</h4></span>
                  <span style={{...styles.section_subtitle, flex: 1}}><h4>Options</h4></span>
                </li>
                {musics.map(element => (
                  <li 
                    className="hoverable" 
                    style={{...styles.track, color: 'rgba(15, 30, 54, .5)', cursor: 'pointer'}}
                    onClick={() => playMusic(element.music_url)}
                  >
                    <span style={{...styles.section_subtitle, flex: 1, display: 'inline-flex', gap: 40}}>
                      <span>1</span>
                      <button><img src="/favourite.png" alt="favourite"/></button>
                    </span>
                    <span style={{...styles.section_subtitle, flex: 1}}>{element.title}</span>
                    <span style={{...styles.section_subtitle, flex: 1}}>{element.artist.name}</span>
                    <span style={{...styles.section_subtitle, flex: 1}}>{element.plays}</span>
                    <span style={{...styles.section_subtitle, flex: 1}}>{element.time}</span>
                    <span style={{...styles.section_subtitle, flex: 1, display: 'inline-flex', justifyContent: 'space-between'}}>
                      <button><img src="/download items.png" alt="download items"/></button>
                      <button><img src="/share_black.png" alt="share"/></button>
                      <button style={{fontSize: 12, paddingBottom: 5}}><span>...</span></button>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <audio ref={musicRef} autoPlay={false} controls={false}></audio>
      </main>
      <footer style={{...styles.footer}}>
        <section 
          style={{
            ...styles.left, 
            display: "inline-block", 
            background: '#F51E38', 
            height: '100%', 
            border: 'none'
          }}
        ></section>

        <button style={{...styles.section_audio_buttom}}>
          <img src="/loading.png" alt="loading_button" />
        </button>
        <button style={{...styles.section_audio_buttom}}>
          <img src="/options.png" alt="options_button" />
        </button>

        <section style={{...styles.section_audio_control}}>
          <button 
            style={{...styles.section_audio_buttom}}
            onClick={() => updateMusicCurrentTime( music_state.currentTime - 5 )}
          >
            <img src="/backward.png" alt="backward_button" />
          </button>
          <button style={{...styles.section_audio_pause}}>
            <span style={{...styles.section_audio_pause_span}}>
              <img src="/pause.png" alt="pause_button" />
            </span>
          </button>
          <button 
            style={{...styles.section_audio_buttom}}
            onClick={() => updateMusicCurrentTime( music_state.currentTime + 5 )}
          >
            <img src="/forward.png" alt="forward_button" />
          </button>
        </section>

        <section style={{...styles.section_audio_progress}}>
          <span style={{...styles.section_audio_progress_time}}>
            { secondsToMinutes(music_state.currentTime) }
          </span>
          <div style={{...styles.progress_content}}>
            <div style={{
              position: 'absolute', 
              width: '100%', height: 5, 
              backgroundColor: '#FFF',
              top: '50%',
              transform: 'translateY(-50%)'
            }}>
              <div style={{
                position: 'absolute', 
                top: 0, bottom: 0, left: 0,
                backgroundColor: '#F51E38',
                width: `${(music_state.currentTime * 100) / music_state.duration}%`
              }}></div>
            </div>
            <input
              type="range" 
              min="0" 
              max="100"
              defaultValue={0}
              style={{
                display: 'inline-block',
                width: '100%',
                opacity: 0,
                cursor: 'pointer'
              }} 
              onClick={(event) => {
                updateMusicCurrentTime( event.target.value * 0.01 * music_state.duration );
              }}
            />
          </div>
          <span style={{...styles.section_audio_progress_time}}>
            { secondsToMinutes(music_state.duration) }
          </span>
        </section>

        <button style={{...styles.section_audio_buttom}}>
          <img src="/louder.png" alt="louder_button" />
        </button>
        <button style={{...styles.section_audio_buttom}}>
          <img src="/window.png" alt="window_button" />
        </button>
      </footer>
    </>
  )
}
