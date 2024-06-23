import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const images = [
  require('../../assests/person1.jpg'),
  require('../../assests/person2.jpg'),
  require('../../assests/person3.jpg'),
  require('../../assests/person4.jpg'),
  require('../../assests/person5.jpg')
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a modern furniture store providing quality products to make your home beautiful and comfortable.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaEnvelope /> info@furniturestore.com</p>
          <p><FaPhone /> +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Gallery</h4>
          <div className="image-grid">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Furniture Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
