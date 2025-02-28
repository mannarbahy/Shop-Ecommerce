import React,  { useState, useContext } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

import logo from '../Assets/logo.png'
import Cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className='nav-logo'>
        <img src={logo} alt=''/>
       <p>
       Opulent Threads
       </p>
       <ul className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link to='/'>shop</Link>{menu ==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link to='/mens'> men </Link> {menu ==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link to='/women'>Woman </Link>{menu ==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>kids </Link>{menu ==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-cart'>
          <button><Link to='/login'> login</Link></button>
          <Link to='/cart'>  <img src={Cart_icon} alt=''/> </Link>
          <div className='nav-count'>{getTotalCartItems()}</div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
