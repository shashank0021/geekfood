import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Header() {
  return (
    <div className="container">
    <div className="logo">
    <img src="https://flowbite.com/docs/images/logo.svg" />
    <h1>GeekFoods</h1>
    </div>
    
    <div className="nav-links">
    
        <ul>
            <li> <Link to='/'>  Home </Link></li>
            <li><Link to= '/Quote'> Quote </Link> </li>
            <li><Link to ='/Resturant'> Resturants </Link> </li>
            <li> <Link to ='/'> Foods </Link> </li>
            <li> <Link to ='/Contact'>Contact </Link> </li>
            
    
        </ul>
    </div>
    <div className="btns">
        <button>Get Started</button>
    </div>
    </div>
  )
}

export default Header