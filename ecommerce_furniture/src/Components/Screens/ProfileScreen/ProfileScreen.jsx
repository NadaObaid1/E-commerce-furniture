import React, { useState } from 'react';
import './ProfileScreen.css';
import image from '../../assests/person1.jpg';
import { FaHome, FaTachometerAlt, FaProjectDiagram, FaTasks, FaChartLine, FaUsers, FaHeadset, FaCog, FaSignOutAlt, FaEdit, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ProfileScreen = () => {
  const [user, setUser] = useState({
    name: "Nada Obaid",
    location: "Palestine, Jenin",
    email: "nada.s.obaidd@gmail.com",
    phone: "+978 065 226 25",
    social: [
      { platform: "facebook", url: "" },
      { platform: "instagram", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

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
                <input type="text" name="name" value={user.name} onChange={handleChange}style={{padding:'10px'}}/>
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
            {isEditing && <button onClick={handleEditClick} className='buttoSave'>Save</button>}
            {isEditing && <button onClick={handleEditClick} className='buttocancel'>cancel</button>}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
