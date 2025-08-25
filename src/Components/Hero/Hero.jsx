import React from 'react'
import './Hero.css';
import hand from '../Assets/hand.webp'
import arrow from '../Assets/arrowright.jpg'
import heroImage from '../Assets/hero1.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand} alt=''/>
        </div>
        <p>collections</p>
        <p>for our ladies</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt=''/>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  )
}

export default Hero


