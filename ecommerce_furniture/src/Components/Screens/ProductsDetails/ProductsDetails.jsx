import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaHeart } from 'react-icons/fa';
import './ProductsDetails.css';
import { useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductsDetails = () => {
  const { id } = useParams(); // Accessing id parameter from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://e-commercefurniturebackend.onrender.com/products/products/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === "Success") {
          setProduct(data.product);
        }
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }

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
            {product.subImages.map((image, index) => (
              <div key={index}>
                <img src={image.secure_url} alt={product.name} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">${product.finalPrice}</p>
          <div className="product-rating">
            <span>⭐⭐⭐⭐⭐</span> 2 reviews
          </div>
          <div className="product-actions">
            <input type="number" defaultValue="1" min="1" />
            <button className="add-to-cart">Add to Cart</button>
            <button className="wishlist"><FaHeart /></button>
          </div>
          <p className="product-description">
            {product.description}
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
          <p className="product-sku">SKU: {product._id}</p>
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


