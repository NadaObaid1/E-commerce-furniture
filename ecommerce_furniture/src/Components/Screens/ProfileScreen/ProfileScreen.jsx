import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './ProfileScreen.css';
import image from '../../assests/nada.jpg';
import { FaHome, FaTachometerAlt, FaProjectDiagram, FaTasks, FaChartLine, FaUsers, FaHeadset, FaCog, FaSignOutAlt, FaEdit, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AuthContext } from '../../../AuthContext.js';

const ProfileScreen = () => {
  const [user, setUser] = useState({
    name: "Nada Obaid",
    location: "Palestine, Jenin",
    email: "nada.s.obaidd@gmail.com",
    phone: "0562134789",
    social: [
      { platform: "facebook", url: "" },
      { platform: "instagram", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const { userId, token } = useContext(AuthContext);

  useEffect(() => {
    fetchUserData(); // Fetch user data when component mounts
  }, [token]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://e-commercefurniturebackend.onrender.com/profiles/profile/${userId}`,
        {
          headers: {
            Authorization: `Nada__${token}`,
          },
        }
      );

      if (response.status === 200) {
        const { userName, email, phone, address } = response.data;
        setUser({
          name: userName,
          email: email,
          phone: phone,
          location: address,
        });
      } else {
        console.log('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        'https://e-commercefurniturebackend.onrender.com/profiles/profile/6680b2bf661b9e950bb8f7da',
        {
          userName: user.name,
          email: user.email,
          phone: user.phone,
          address: user.location,
        },
        {
          headers: {
            Authorization: `Nada__${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log('Profile updated successfully');
        setIsEditing(false);
        fetchUserData(); // Fetch updated user data
      } else {
        console.log('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile-page">
      <div className="sidebar">
        <nav className="sidebar-nav">
          <h2>Your Profile</h2>
          <ul>
            <li><a href="#"><FaHome /> Home</a></li>
            <li><a href="#"><FaTachometerAlt /> Dashboard</a></li>
            <li><a href="#"><FaProjectDiagram /> Projects</a></li>
            <li><a href="#"><FaTasks /> Tasks</a></li>
            <li><a href="#"><FaChartLine /> Reporting</a></li>
            <li>
              <a href="#"><FaUsers /> Designers</a>
              <ul>
                <li><a href="#">All designers</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Recently added</a></li>
              </ul>
            </li>
            <li><a href="#"><FaHeadset /> Support</a></li>
            <li><a href="#"><FaCog /> Settings</a></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
            <a href="#" className="logout"><FaSignOutAlt /> Logout</a>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="background"></div>
        <div className="profile-content">
          <img 
            src={image} alt="Profile"  
            className="profile-picture" 
          />
          <section className="profile-info">
            <div className="info-itemName">
              {isEditing ? (
                <input type="text" name="name" value={user.name} onChange={handleChange} style={{padding:'10px'}}/>
              ) : (
                <h2>{user.name}<FaEdit className="edit-icon" onClick={handleEditClick} /></h2>
              )}
            </div>
            <div className="info-item">
              <strong>Location:</strong>
              {isEditing ? (
                <input type="text" name="location" value={user.location} onChange={handleChange} style={{padding:'10px'}} />
              ) : (
                <p>{user.location} <FaEdit className="edit-icon" onClick={handleEditClick} /></p>
              )}
            </div>
            <div className="info-item">
              <strong>Email:</strong>
              {isEditing ? (
                <input type="text" name="email" value={user.email} onChange={handleChange} style={{padding:'10px'}}/>
              ) : (
                <p>{user.email} <FaEdit className="edit-icon" onClick={handleEditClick} /></p>
              )}
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              {isEditing ? (
                <input type="text" name="phone" value={user.phone} onChange={handleChange} style={{padding:'10px'}}/>
              ) : (
                <p>{user.phone} <FaEdit className="edit-icon" onClick={handleEditClick} /></p>
              )}
            </div>
            <div className="social-links">
              <div><FaFacebook/></div>
              <div className='FaInstagram'><FaInstagram/></div>
              <div><FaLinkedin/></div>
            </div>
            {isEditing && <button onClick={handleSaveClick} className='buttonSave'>Save</button>}
            {isEditing && <button onClick={handleEditClick} className='buttonCancel'>Cancel</button>}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
