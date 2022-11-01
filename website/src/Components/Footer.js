/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={50} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <h4>Flat no. D2, S.no. 124|1 Minar Apartment Law college road, Opp. Film and Television Institute, Erandwane, Pune, Maharashtra 411004</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 9876543210</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> connectdynastical@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>We are a one-stop destination for all your media needs. Right from researching your brand, finding your target audience to making engaging content, and executing corporate events, we have everything under one umbrella for your convenience. Our innovative approach makes sure that your business be it big or small, receives the best service and strategies you need.</p>
                    <div className='social'>
                        <a href="https://www.facebook.com/DynasticalCommunication/" className="social-item">
                            <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        </a>
                        <a href="https://twitter.com/adsatdynastical" className="social-item">
                            <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        </a>
                        <a href="https://www.linkedin.com/company/dynastical-communication" className="social-item">
                            <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        </a>
                        <a href="https://www.instagram.com/dynasticalcommunication/" className="social-item">
                            <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        </a>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer