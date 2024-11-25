import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className="container">
    <div className="navbar">
      <div className="logo">
        <a href="index.html">
          <img
            src="https://i.ibb.co/kDVwgwp/logo.png"
            alt="RedStore"
            width="125px"
          />
        </a>
      </div>
      <nav>
        <ul id="MenuItems">
          <li>
            <a href="index.html"><Link to="/">Home</Link></a>
          </li>
          <li>
            <a href="#"><Link to="/cart">Cart</Link></a>
          </li>
          <li>
            <a href="#"><Link to="/contact">Contact</Link></a>
          </li>
          <li>
            <a href="account.html"><Link to="/login">Login</Link></a>
          </li>
        </ul>
      </nav>
      <a href="cart.html">
        <img
          src="https://i.ibb.co/PNjjx3y/cart.png"
          alt=""
          width="30px"
          height="30px"
        />
      </a>
      <img
        src="https://i.ibb.co/6XbqwjD/menu.png"
        alt=""
        className="menu-icon"
        onclick="menutoggle()"
      />
    </div>
  </div>
    </div>
  )
}

export default Navbar