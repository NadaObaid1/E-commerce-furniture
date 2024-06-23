import React from "react";
import "./About.css";

export default function About() {
  return (
    <div style={{backgroundColor: '#f2f2f2'}}>
    <div className="about-container">
      <div className="vertical-heading">
        <div className="line"></div>
        <h1>About Us</h1>
        <div className="line"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={require("../../assests/about.jpg")} alt="About Us" />
        </div>
        <div className="about-text">
          <p>
            Furniture isn't just about functionality but also an expression of
            personality
          </p>
          <p>
            Here at Karisma you can find elegant items that define charm and
            allure, enhancing your living experience.
          </p>
          <p>
            Thank you for choosing our store. We look forward to helping you
            furnish your dream home!
          </p>
          <div className="numbers-container">
            <div className="number-item">
              <h4>+400</h4>
              <h6>Collections</h6>
            </div>
            <div className="number-item">
              <h4>+500</h4>
              <h6>Customers</h6>
            </div>
            <div className="number-item">
              <h4>+200</h4>
              <h6>Furnishings</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
