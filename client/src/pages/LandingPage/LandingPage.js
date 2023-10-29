import React from 'react'
import Navbar from '../CommonComponents/components/navbar'
import LandingHeroSection from './components/LandingHeroSection'

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <Navbar/>
      <LandingHeroSection/>
    </div>
  )
}
