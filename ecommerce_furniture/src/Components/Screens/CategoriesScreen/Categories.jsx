import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaEye, FaHeart, FaPlus } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import './Categories.css';

const Categories = () => {
  const [activeList, setActiveList] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://e-commercefurniturebackend.onrender.com/Catogories/')
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          setCategories(data.Categories);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleListChange = (direction) => {
    if (direction === 'left' && activeList > 1) {
      setActiveList(activeList - 1);
    } else if (direction === 'right' && activeList < 2) {
      setActiveList(activeList + 1);
    }
  };

  const list1 = categories.slice(0, 4);
  const list2 = categories.slice(4);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container3">
        <div className="d-flex justify-content-center">
          <div className="title">
            <a className="portbtn2 btn-lg" href="#">BEST Furniture Collection</a>
            <h2>NEW SUMMER Furniture Collection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
          </div>
        </div>
        
        <div className="tab-content pt-5" id="myTabContent">
          <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex="0">
            <div className="row">
              {(activeList === 1 ? list1 : list2).map((item, index) => (
                <div className="col-md-2" key={index}>
                  <div className="portfolio-item position-relative">
                    <div className="overlay d-flex justify-content-center align-items-center">
                    <Link to={`/ProductsScreen/${item._id}`} className="add-cart">
                        <span>SHOW PRODUCTS </span> 
                        <span className='faPlusIcon'><FaPlus/></span>
                      </Link>
                    </div>
                    <img src={item.image.secure_url} className="w-100" alt={item.Name} style={{ height: '35vh' }} />
                    <div className="info d-flex justify-content-between align-items-center">
                      <div className="desc">
                        <p>Quicklook<span><FaEye/></span></p>
                      </div>
                      <div className="desc">
                        <p>Wishlist <span><FaHeart/></span></p>
                      </div>
                    </div>
                  </div>
                  <div className="info2">
                    <h5 className="title m-0">{item.Name}</h5>
                  </div>
                </div> 
              ))}
            </div>
          </div>  
        </div>
        
        <div className="navigation-arrows">
          <button className="arrow-btnleft" onClick={() => handleListChange('left')} disabled={activeList === 1}>
            <FaArrowLeft />
          </button>
          <button className="arrow-btnright" onClick={() => handleListChange('right')} disabled={activeList === 2}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categories;
