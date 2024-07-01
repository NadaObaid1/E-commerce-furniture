import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaRegUser, FaRegHeart } from 'react-icons/fa';
import './Navbar.css';
import { AuthContext } from '../../../../AuthContext.js';
import axios from 'axios';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetchCartCount();
  }, []);

  const fetchCartCount = () => {
    axios.get('https://e-commercefurniturebackend.onrender.com/cart/getCart', {
      headers: {
        'Authorization': `Nada__${token}`,
      },
    })
    .then(response => {
      if (response.data && response.data.cart && response.data.cart.products) {
        setCartCount(response.data.cart.products.length);
        fetchCartCount()
      } else {
        setCartCount(0);
      }
    })
    .catch(error => {
      console.error('Error fetching cart count:', error);
      setCartCount(0); // Default to 0 in case of error
    });
  };

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

      <header className="navbar-header" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="container">
          <div className="titlee">
            <text className='titlestyle'>e-commerce</text>
          </div>
          <div className="social-icons">
            <Link to="ProfileScreen"><FaRegUser /></Link>
            <Link to="/Favourites"><FaRegHeart /></Link>
            <Link to="/ShoppingCart" className="cart-icon"><FaShoppingCart />
              <div className="counter">{cartCount}</div>
            </Link>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-main" style={{ backgroundColor: '#f2f2f2' }}>
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
                <Link className="nav-link" to="/ProfileScreen">Profile</Link>
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

export default Navbar;
