import React from 'react'
import Footer from '../Components/Footer'
import HeroVideo from '../Components/HeroVideo'
import Navbar from '../Components/Navbar'
import Form from '../Components/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroVideo heading='CONTACT.' text='Contact GLX Travel' />
            <Form />
        </div>
    )
}

export default Contact