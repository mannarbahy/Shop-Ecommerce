import React from 'react'
import './Hero.css'
import hand_icons from '../Assets/hand_icon.png'
import Arrow_icons from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-left'>
         <h2>New arrivals </h2>
         <div>
          <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icons} alt=""/>
          </div>
          <p>collections</p>
          <p>for everyone</p>
         </div>
         <div className='hero-last-btn'>
          <div >latest collections</div>
          <img src={Arrow_icons} alt="" />
         </div>
        </div>


        <div className='hero-right'>
             <img src={hero_img} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero
