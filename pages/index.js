import styles from '../styles/Home.js'
import Head from 'next/head'
import api from '../services/api';
import { useEffect, useState } from 'react'

import Slider from '../components/Slider'

export default function Home() {
  const [ musics, setMusics ] = useState([]);
  const [ albums, setAlbums ] = useState([]);
  const [ artists, setArtists ] = useState([]);
  const [ slides, setSlides ] = useState([]);
  const [ current_slideid, setCurrentSlideId ] = useState(0);

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
          <button style={{...styles.section_audio_buttom}}>
            <img src="/backward.png" alt="backward_button" />
          </button>
          <button style={{...styles.section_audio_pause}}>
            <span style={{...styles.section_audio_pause_span}}>
              <img src="/pause.png" alt="pause_button" />
            </span>
          </button>
          <button style={{...styles.section_audio_buttom}}>
            <img src="/forward.png" alt="forward_button" />
          </button>
        </section>

        <section style={{...styles.section_audio_progress}}>
          <span style={{...styles.section_audio_progress_time}}>1:32</span>
          <div style={{...styles.progress_content}}>
            <input 
              type="range" 
              min="0" 
              max="100" 
              defaultValue="28"
              style={{
                display: 'inline-block',
                width: '100%'
              }} 
            />
          </div>
          <span style={{...styles.section_audio_progress_time}}>5:07</span>
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
