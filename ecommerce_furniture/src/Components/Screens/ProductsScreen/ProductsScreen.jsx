import React, { useState } from 'react';
import { FaPlus, FaEye} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductsScreen.css';

const ProductsScreen = () => {
  const [sort, setSort] = useState('Default Sorting');
  const [cart, setCart] = useState([]);

  const handleSortChange = (event) => {
    setSort(event.target.textContent);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      autoClose: 2000 
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

  const products = [
    { id: 1, name: '3/4 SLEEVE SHIRT', price: 75, description: 'Description for 3/4 SLEEVE SHIRT', image: require('../../assests/1 (7).jpg') },
    { id: 2, name: 'BEACH BAG', price: 60, description: 'Description for BEACH BAG', image: require('../../assests/1 (2).jpg') },
    { id: 3, name: 'BEIGE TOP', price: 45, description: 'Description for BEIGE TOP', image: require('../../assests/10.jpg') },
    { id: 4, name: 'FLOWING SHORTS', price: 60, description: 'Description for FLOWING SHORTS', image: require('../../assests/1 (4).jpg') },
    { id: 5, name: 'BODYSUIT WITH LACE', price: 60, description: 'Description for BODYSUIT WITH LACE', image: require('../../assests/1 (5).jpg'), originalPrice: 120 },
    { id: 6, name: 'LEATHER PINK DRESS', price: 240, description: 'Description for LEATHER PINK DRESS', image: require('../../assests/1 (6).jpg') },
    { id: 7, name: 'FLOWER T-SHIRT', price: 40, description: 'Description for FLOWER T-SHIRT', image: require('../../assests/12.jpg') },
    { id: 8, name: 'CITY BAG', price: 80, description: 'Description for CITY BAG', image: require('../../assests/13.jpg') },
    { id: 9, name: 'CITY BAG', price: 80, description: 'Description for CITY BAG', image: require('../../assests/1 (9).jpg') }
  ];

  return (
    <section className="populor-products">
      <div className="containerr">
        <div className="row">
          <div className="col">
            <div className="product-container pt-5">
              <div className="items mb-5">
                <div className="graybox mb-2">Color</div>
                <ul className='Ul'>
                  {colors.map((color) => (
                    <li key={color.name}>
                      <a href={`products/${color.name}`}>{color.name} </a>({color.count})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="items">
                <div className="graybox mb-2">Size</div>
                <ul className='Ul'>
                  {sizes.map((size) => (
                    <li key={size.name}>
                      <a href={`products/${size.name.replace(/ /g, '')}`}>{size.name} </a>({size.count})
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
                                  <div className="add-cart" onClick={() => handleAddToCart(product)}>
                                    <span>ADD TO CART </span><FaPlus/>
                                  </div>
                                </div>
                                <Link to={`/products/${product.id}`}>
                                  <img src={`${product.image}`} className="w-100" alt={product.name} />
                                  <div className="info">
                                  <Link to={`/ProductsDetails`} style={{ textDecoration: 'none' }}>
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
                                  {product.originalPrice && <del>${product.originalPrice}</del>} ${product.price}
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
