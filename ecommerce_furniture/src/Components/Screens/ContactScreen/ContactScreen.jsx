import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';
import './ContactScreen.css';

const ContactScreen = () => {
  return (
    <div className="containerContact">
      <div className="contact-info">
        <h4>Contact Info</h4>
        <p><FaMapMarkerAlt /> 2919 Meadowbrook Road Los Angeles, CA 90017</p>
        <p><FaEnvelope /> lorem@ipsum.com</p>
        <p><FaPhone /> 310-386-1623</p>
        <div className="social-icons">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://pinterest.com"><FaPinterest /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
      </div>
      <div className="message-form">
        <h4>Contact Us</h4>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="Nada" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input type="text" name="mobile" />
            </div>
          </div>
          <div className="form-group">
            <label>Write your message here...</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
