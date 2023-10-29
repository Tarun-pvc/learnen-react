import React from 'react'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>Learnen</h1>
        <div className='navbar-buttons'>
            <button className='navbar-button'>Home</button>
            <button className='navbar-button'>About Us</button>
            <button className='navbar-button'>Explore</button>
            <button className='navbar-button'><span><FontAwesomeIcon icon={faPhone}/></span></button>
            <button className='navbar-button black-button'>Sign In</button>
        </div>
    </nav>
  )
}
