import React, { useState } from 'react'

import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart from '../Assets/cart.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu]= useState("shop");




  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>BLISSY</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("dresses")}}><Link style={{textDecoration:'none'}} to='/dresses'>Dresses</Link>{menu==="dresses"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("tops")}}><Link style={{textDecoration:'none'}} to='/tops'>Tops</Link>{menu==="tops"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("denims")}}><Link style={{textDecoration:'none'}} to='/denims'>Denims</Link>{menu==="denims"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("heels")}}><Link style={{textDecoration:'none'}} to='/heels'>Heels</Link>{menu==="heels"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shoes")}}><Link style={{textDecoration:'none'}} to='/shoes'>Shoes</Link>{menu==="shoes"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
