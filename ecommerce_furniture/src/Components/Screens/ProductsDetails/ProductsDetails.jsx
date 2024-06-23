import React from 'react';
import Slider from 'react-slick';
import image1 from '../../assests/1 (5).jpg';
import image2 from '../../assests/11 (5).jpg';
import image3 from '../../assests/111 (5).jpg';
import { FaHeart } from 'react-icons/fa';
import './ProductsDetails.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductsDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="page-container">
      <div className="product-page">
        <div className="product-image">
          <Slider {...settings}>
            <div>
              <img src={image1} alt="Chair" />
            </div>
            <div>
              <img src={image2} alt="Chair" />
            </div>
            <div>
              <img src={image3} alt="Chair" />
            </div>
          </Slider>
        </div>
        <div className="product-details">
          <h1 className="product-title">Afternoon Chair</h1>
          <p className="product-price">$340</p>
          <div className="product-rating">
            <span>⭐⭐⭐⭐⭐</span> 2 reviews
          </div>
          <div className="product-actions">
            <input type="number" defaultValue="1" min="1" />
            <button className="add-to-cart">Add to Cart</button>
            <button className="wishlist"><FaHeart /></button>
          </div>
          <p className="product-description">
            The first Menu chair ever is a three-legged one, and it's the result of deconstructing an item, piece by piece, with the purpose of obtaining an original design.
          </p>
          <div className="product-features">
            <h3>Features and materials</h3>
            <ul>
              <li>Black</li>
              <li>Wood</li>
            </ul>
          </div>
          <div className="product-dimensions">
            <h3>Dimensions</h3>
            <p>47x47x59cm</p>
          </div>
          <p className="product-sku">SKU: 8709804</p>
          <p className="product-category">Category: Accessories, Chair</p>
          <div className="social-share">
            <button>Facebook</button>
            <button>Twitter</button>
            <button>Pinterest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;


