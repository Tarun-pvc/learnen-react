import React from 'react'
import LandingHeroImg from '../assets/LandingHero.png'
import '../styles/LandingHeroStyles.css'

export default function LandingHeroSection() {
  return (
    <div className='landing-hero-section'>
      <div className='landing-hero-left'>
        <h1>Start <span className='green-text'>Learning</span><br/>From the World's<br/>Pro Instructors</h1>
        <p>Get quality world-class courses at the best price and learn any new skill from our expert mentors</p>
        <button>Get Started</button>
      </div>
      <div className='landing-hero-right'>
        <img src={LandingHeroImg} alt='landing-hero'/>
      </div>
      <div className='circle top-left'></div>
      <div className='circle bottom-left'></div>
      <div className='circle middle'></div>
    </div>
  )
}
