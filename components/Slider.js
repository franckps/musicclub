import styles from '../styles/Home.js'

import { useEffect, useState, useRef } from 'react'

export default function Slider({ slides, time, transition }) {

  const [ current_slideid, setCurrentSlideId ] = useState(0);
  const nextSlideRef = useRef();

  useEffect(() => {
    nextSlideRef.current = nextSlide
  });

  useEffect(() => {
    const playSlides = () => { 
      nextSlideRef.current()
    }

    setTimeout(playSlides, !!time? time : 5000);
  }, [current_slideid]);

  const nextSlide = () => {
    if(slides.length > current_slideid + 1)
      setCurrentSlideId(current_slideid + 1)
    else
      setCurrentSlideId(0)
  }
  
  return (

    <section style={{...styles.slider}}>
      <div style={{...styles.slider_buttons}}>
        {
          slides.map((element, key) => ( 
            <button 
              key={element.id} 
              style={{
                ...styles.slider_button, 
                ...current_slideid === key && {backgroundColor: '#000'},
              }}
              onClick={() => setCurrentSlideId(key)}
            >-</button>
          ))
        }
      </div>
      <ul style={{...styles.slide_list}}>
      {
          slides.map((element, key) => ( 
          <li
              key={element.id} 
              id={`id-${element.id}`} 
              style={{
                ...styles.slide, 
                backgroundImage: `url(${element.image_url})`, 
                transform: `translateX(-${ current_slideid * 100 }%)`,
                transition: `${transition? transition : 1}s all`
              }}
          >
              <div style={{...styles.slide_text}}>
              <span style={{...styles.slide_text_span}}>//TRENDING</span>
              <h3 style={{...styles.slide_text_album}}>{element.album}</h3>
              <strong style={{...styles.slide_text_artist}}>- {element.artist.name}</strong>
              <p>
                  <button style={{...styles.slide_button, ...styles.slide_button_play}}>PLAY <img src="/play.png" alt="play" /></button>
                  <button style={{...styles.slide_button}}><img src="/share.png" alt="share" /></button>
              </p>
              </div>
          </li>
          ))
      }
      </ul>

  </section>
  )
}
