import React from 'react'
import './HeroVideo.css'
import Video from './Images/video1.mp4'
import TypeWriter from 'typewriter-effect'

function HeroVideo() {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4' />
        </video>
        <div className='text-content'>
            <h1>
              <TypeWriter
                options={{
                  autoStart:true,
                  loop:true,
                  delay:100,
                  strings:["Dynastical Communication Pvt Ltd"]
                }}
              />
            </h1>
            <p>Advertising Agency</p>
        </div>
    </div>
  )
}

export default HeroVideo;