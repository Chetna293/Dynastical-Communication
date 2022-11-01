import React from 'react'
import './Clients.css'
import img1 from './Images/client1.png'
import img2 from './Images/client2.png'
import img3 from './Images/client3.jpg'
import img4 from './Images/client4.jpg'
import img5 from './Images/client5.png'
import img6 from './Images/client6.jpg'

function Clients() {
  return (
    <section id="clients">
        <h1>Clients</h1>
        <p>We understand that the client-agency relationship rests only on quality, reliability and affordability. That's why we strive to provide the most suitable services at the most affordable prices. We strive to maintain the quality of your brand and give you 100%, to make your brand stand out in the market. Our customers consist of various FMCG, corporate, educational and political organizations.</p>
        <div className="clients">
            <div className="c-box">
                <img id='big' className='trend' src={img1} alt='img1' />
                <img id='big' className='trend' src={img3} alt='img3' />
                <img id='big' className='trend' src={img2} alt='img2' />
                <img id='big' className='trend' src={img4} alt='img4' />
                <img id='big' className='trend' src={img6} alt='img6' />
                <img id='big' className='trend' src={img5} alt='img5' />
                <img id='big' className='trend' src={img2} alt='img2' />
                <img id='big' className='trend' src={img4} alt='img4' />
                <img id='big' className='trend' src={img1} alt='img1' />
                <img id='big' className='trend' src={img3} alt='img3' />
                <img id='big' className='trend' src={img6} alt='img6' />
                <img id='big' className='trend' src={img5} alt='img5' />
            </div>
        </div>
    </section>
  )
}

export default Clients 