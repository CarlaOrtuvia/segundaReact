import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='container'>
        <nav className='nav'>
            <div className='nav-brand'>
                <a className="navbar-link" href="#">E-Shop</a>
            </div>
            <ul className='nav-list'>
                <li>
                    <a className='nav-link' href="#">ANILLOS</a>
                </li>
                <li>
                    <a className='nav-link' href="#">AROS</a>
                </li>
                <li>
                    <a className='nav-link' href="#">PULSERAS</a>
                </li> 
                <a><CartWidget /></a>
            </ul>
           
        </nav>
    </div>
  )
}

export default Navbar