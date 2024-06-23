import React from 'react';
import './Bestseller.css'; 
import img1 from '../../assests/1 (1).jpg';
import img2 from '../../assests/1 (2).jpg';
import img3 from '../../assests/1 (3).jpg';
import img4 from '../../assests/1 (4).jpg';
import img5 from '../../assests/1 (5).jpg';
import img6 from '../../assests/12.jpg';

export default function Bestseller() {
  return (
    <div className="bestseller-container">
      <h2 className="titlebestseller">best seller</h2>
      <hr className="title-hrbestseller" />
      <p className='Desbestseller'>Explore our distinguished collection of the best products that have received<br/>
        the highest rates of demand and interest</p>
      <div className="bestseller-item">
        <div className="image-containerSold">
          <img src={img1} alt="Bestseller 1" />
          <div className="overlay-text">$200</div>
          <div className="sold-text">sold</div>
        </div>
        <div className="image-containerSold">
          <img src={img2} alt="Bestseller 2" />
          <div className="overlay-text">$300</div>
          <div className="sold-text">sold</div>
        </div>
        <div className="image-container">
          <img src={img3} alt="Bestseller 3" />
          <div className="overlay-text">$250</div>
        </div>
      </div>
      <div className="bestseller-item">
        <div className="image-container">
          <img src={img4} alt="Bestseller 4" />
          <div className="overlay-text">$200</div>
        </div>
        <div className="image-container">
          <img src={img5} alt="Bestseller 5" />
          <div className="overlay-text">$220</div>
        </div>
        <div className="image-containerSold">
          <img src={img6} alt="Bestseller 6" />
          <div className="overlay-text">$370</div>
          <div className="sold-text">sold</div>
        </div>
      </div>
    </div>
  );
}
