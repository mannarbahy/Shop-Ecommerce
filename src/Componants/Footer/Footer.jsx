import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instgram_logo from '../Assets/instagram_icon.png'
import whatsapp_logo from '../Assets/whatsapp_icon.png'
import pinterest_logo from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Shopper logo" />
            <p>Opulent Threads</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Offices</li>
            <li>Contact</li>

        </ul>
        <div className='footer-social-icons'>
            <div className='footer-icons-container'>
               <img src={instgram_logo} alt="" />
        
            </div>
            <div className='footer-icons-container'>
             
               <img src={pinterest_logo} alt="" />
            </div>
            <div className='footer-icons-container'>

               <img src={whatsapp_logo} alt="" />
            </div>
           

        </div> 
        <div className='footer-copyright'>
                <hr />
                <p>Copyright © 2025 - All rights reserved by Manar Bahy</p>

            </div>
      
    </div>
  )
}

export default Footer
