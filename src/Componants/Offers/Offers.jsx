import React from 'react'
import './Offers.css'
import excluxive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You </h1>
            <p>ONLE ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
             <img src={excluxive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
