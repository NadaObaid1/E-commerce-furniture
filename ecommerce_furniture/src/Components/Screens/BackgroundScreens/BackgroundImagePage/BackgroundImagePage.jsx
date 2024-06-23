import React from 'react';
import './BackgroundImagePage.css'
import image from '../../../assests/BackgroundImagePage.png' 

function BackgroundImagePage() {
  return (
      <div className="background-container">
        <img src={image} alt="Fashion Collection" className="background-image" />
      </div>
  );
}
export default BackgroundImagePage;




