import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaRegUser, FaRegHeart } from "react-icons/fa";
import "./Navbar.css";
import { AuthContext } from "../../../../AuthContext.js";
import axios from "axios";
import Modal from "react-modal";
import image from "../../../assests/image.png";

// Set the app element for accessibility
Modal.setAppElement("#root");

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { token } = useContext(AuthContext);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`https://e-commercefurniturebackend.onrender.com/cart/getCart`, {
        headers: {
          'Authorization': `Nada__${token}`,
        },
      });
      const data = response.data;
      const productCount = data.productCount || 0; 
      setCartItems(productCount);
      fetchCartItems();
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setCartItems(0); // Handle error by resetting cartItems
    }
  };

  useEffect(() => {
    if (token) {
      fetchCartItems();
    }
  }, [token]);

  useEffect(() => {
    setModalIsOpen(true); // Open modal on component mount
  }, []);

  // UseEffect to fetch cart items when the component mounts and whenever the token changes
  useEffect(() => {
    fetchCartItems();
  }, [token]);

  const closeModal = () => {
    setModalIsOpen(false);
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

      <header className="navbar-header" style={{ backgroundColor: "#f2f2f2" }}>
        <div className="container">
          <div className="titlee">
            <text className="titlestyle">e-commerce</text>
          </div>
          <div className="social-icons">
            <Link to="ProfileScreen">
              <FaRegUser />
            </Link>
            <Link to="/Favourites">
              <FaRegHeart />
            </Link>
            <Link to="/ShoppingCart" className="cart-icon">
              <FaShoppingCart />
              <div className="counter">{cartItems}</div> 
            </Link>
          </div>
        </div>
      </header>
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-main"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-linkHome" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProductsScreen">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProfileScreen">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactScreen">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login/Register Modal"
        className="Modal"
      >
        <h2>Welcome to our e-commerce site!</h2>
        <img
          src={image}
          alt="Welcome"
          style={{ width: "50%", height: "auto", marginBottom: "20px" }}
        />
        <p>Please login or register to continue.</p>
        <div>
          <Link to="/login" onClick={closeModal}>
            Login
          </Link>
          <span> | </span>
          <Link to="/SignUp" onClick={closeModal}>
            Register
          </Link>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
