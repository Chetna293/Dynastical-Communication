import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './Images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const [color,setColor] = useState(false)
        const changeColor = () =>{
            if(window.scrollY >= 100){
                setColor(true)
            }else{
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)
    return (
        <div className={color ? 'header header-bg' : 'header' }>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#aboutus' onClick={closeMenu}>About Us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#features' onClick={closeMenu}>Our Services</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#team' onClick={closeMenu}>Team</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#clients' onClick={closeMenu}>Clients</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#career' onClick={closeMenu}>Career</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar