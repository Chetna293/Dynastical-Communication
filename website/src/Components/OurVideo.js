import React from 'react'
import './OurVideo.css'
import video from './Images/video.mp4'

function OurVideo() {
  return (
    <div className='video-container'>
        <div className='content'>
            <p>We have an excellent story</p>
            <h1>Watch Our Video</h1>
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut laboret dolore magna aliquyam erat, sed diam voluptua laboret dolore magna.</span>
        </div>
        <div className='add-video'>
            <a href="https://video-previews.elements.envatousercontent.com/h264-video-previews/502bc400-e9c6-4a6c-940b-1c10553a1727/21508734.mp4"> 
                <video src={video} alt='video' autoCorrect='on' />
            </a>
        </div>
    </div>
  )
}

export default OurVideo