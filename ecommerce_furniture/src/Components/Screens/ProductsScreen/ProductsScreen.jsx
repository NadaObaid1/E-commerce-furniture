import React, { useState, useEffect, useContext } from 'react';
import { FaPlus, FaEye, FaHeart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../AuthContext.js';
import './ProductsScreen.css';

const ProductsScreen = () => {
  const [sort, setSort] = useState('Default Sorting');
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetch('https://e-commercefurniturebackend.onrender.com/products/getProducts')
      .then(response => response.json())
      .then(data => {
        if (data.message === "Success") {
          setProducts(data.products);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddToCart = (product) => {
    if (!product || !product._id) {
      console.error('Invalid product data:', product);
      toast.error('Invalid product data. Please try again.');
      return;
    }
    const data = {
      productId: product._id,
    };
    axios.post('https://e-commercefurniturebackend.onrender.com/cart/', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Nada__${token}`,
      },
    })
    .then(response => {
      if (!response.data) {
        throw new Error('Failed to add to cart');
      }
      toast.success(`${product.name} added to cart!`, {
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate('/ShoppingCart');
      }, 2000); 
    })
    .catch(error => {
      console.error('Error adding to cart:', error.message);
      toast.error('Failed to add to cart');
    });
  };

  const handleAddToFavorites = (product) => {
    if (!product || !product._id) {
      console.error('Invalid product data:', product);
      toast.error('Invalid product data. Please try again.');
      return;
    }
    const data = {
      productId: product._id,
    };
    axios.post('https://e-commercefurniturebackend.onrender.com/favorite/', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Nada__${token}`,
      },
    })
    .then(response => {
      if (!response.data || response.data.message !== 'success') {
        throw new Error('Failed to add to favorites');
      }
      toast.success(`${product.name} added to favorites!`);
      setTimeout(() => {
        navigate('/Favourites');
      }, 2000); 
    })
    .catch(error => {
      console.error('Error adding to favorites:', error.message);
      toast.error('Failed to add to favorites. Please try again.');
    });
  };

  const colors = [
    { name: 'black', count: 1 },
    { name: 'brown', count: 10 },
    { name: 'green', count: 1 },
    { name: 'grey', count: 2 },
    { name: 'white', count: 3 },
  ];

  const sizes = [
    { name: 'Length:180cm | Width:65cm', count: 2 },
    { name: 'Length:120cm | Width:70cm', count: 3 },
    { name: 'Length:150cm | Width:60cm', count: 4 },
    { name: 'Length:140cm | Width:80cm', count: 5 },
  ];

  return (
    <section className="populor-products">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="product-container pt-5">
              <div className="items mb-5">
                <div className="graybox mb-2">Color</div>
                <ul className='Ul'>
                  {colors.map((color) => (
                    <li key={color.name}>
                      <Link to={`/products/${color.name}`}>
                        {color.name} ({color.count})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="items">
                <div className="graybox mb-2">Size</div>
                <ul className='Ul'>
                  {sizes.map((size) => (
                    <li key={size.name}>
                      <Link to={`/products/${size.name.replace(/ /g, '')}`}>
                        {size.name} ({size.count})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="photos">
              <div className="row">
                <section className="portfolio my-5 py-5" id="portfolio">
                  <div className="container">
                    <div className="container2 d-flex justify-content-between">
                      <div className="left-content d-flex">
                        <span>Showing 1–9 of 60 results</span>
                      </div>
                      <div style={{marginTop: '30px'}}>
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {sort}
                        </button>
                      </div>
                    </div>
                    <div className="tab-content pt-5" id="myTabContent">
                      <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex="0">
                        <div className="product-container">
                          {products.map((product, index) => (
                            <div className="product-item" key={index}>
                              <div className="portfolio-item position-relative">
                                <div className="overlay d-flex justify-content-center align-items-center">
                                <div className="add-favorite" onClick={() => handleAddToFavorites(product)}>
                                  <span><FaHeart /></span>
                                </div>
                                  <div className="add-cart" onClick={() => handleAddToCart(product)}>
                                    <span>ADD TO CART </span><FaPlus/>
                                  </div>
                                </div>
                                <Link to={`/products/${product._id}`}>
                                  <img src={product.mainImage.secure_url} className="w-100" alt={product.name} />
                                  <div className="info">
                                    <Link to={`/ProductsDetails/${product._id}`} style={{ textDecoration: 'none' }}>
                                      <div className="descDetails">
                                        <p>Show Product Details</p>
                                        <span><FaEye/></span>
                                      </div>
                                    </Link>
                                  </div>
                                </Link>
                              </div>
                              <div className="info2">
                                <h5 className="m-0">{product.name}</h5>
                                <p className="m-0">
                                  {product.discount ? <del>${product.price}</del> : null} ${product.finalPrice}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProductsScreen;
