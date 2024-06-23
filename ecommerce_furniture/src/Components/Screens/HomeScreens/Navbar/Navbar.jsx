import React from 'react';
import { Link } from "react-router-dom";
import {FaShoppingCart, FaRegUser, FaRegHeart } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {

  return (
    <nav>
      <div className="navbar-top">
        <div className="container navbar-container">
          <div className="navbar-left-content">
            <span>Easy Returns | Free Shipping Over $199</span>
          </div>
          <div className="navbar-right-content">
            <Link to="/login">Login</Link>
            <span>|</span>
            <Link to="/SignUp">Register</Link>
          </div>
        </div>
      </div>

      <header className="navbar-header" style={{backgroundColor: '#f2f2f2'}}>
        <div className="container">
          <div className="titlee"> 
              <text className='titlestyle'>e-commerce</text>
          </div>
          <div className="social-icons">
            <Link to="ProfileScreen"><FaRegUser /></Link>
            <Link to="/Favourites"><FaRegHeart /></Link>
            <Link to="/ShoppingCart" className="cart-icon"><FaShoppingCart />
              <div className="counter">5</div>
            </Link>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-main" style={{backgroundColor: '#f2f2f2'}}>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-linkHome" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProductsScreen">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Order">Order</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactScreen">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
