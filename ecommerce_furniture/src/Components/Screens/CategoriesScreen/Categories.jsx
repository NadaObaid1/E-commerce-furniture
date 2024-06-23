import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaEye, FaHeart, FaPlus } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import './Categories.css';

const Categories = () => {
  const [activeList, setActiveList] = useState(1);

  const handleListChange = (direction) => {
    if (direction === 'left' && activeList > 1) {
      setActiveList(activeList - 1);
    } else if (direction === 'right' && activeList < 2) {
      setActiveList(activeList + 1);
    }
  };
  const portfolioItems = [
    { 
      id: 1,
      image: require('../../assests/Living Room.jpg'),
      title: 'Living Room',
      price: '$60',
    },
    { 
      id: 2,
      image: require('../../assests/Home Gym.jpg'),
      title: 'Home Gym',
      price: '$45',
    },
    { 
      id: 3,
      image: require('../../assests/Game and Entertainment Room.jpg'),
      title: 'Game and Entertainment Room',
      price: '$60',
    },
    { 
      id: 4,
      image: require('../../assests/Kitchen.jpg'),
      title: 'Kitchen',
      price: '$120',
    },
    { 
      id: 5,
      image: require('../../assests/Home Office.jpg'),
      title: 'Home Office',
      price: '$45',
    },
    { 
      id: 6,
      image: require('../../assests/Entryway and Hallway.jpg'),
      title: 'Entryway and Hallway',
      price: '$45',
    },
    { 
      id: 7,
      image: require('../../assests/Home Decor.jpg'),
      title: 'Home Decor',
      price: '$120',
    },
    { 
      id: 8,
      image: require('../../assests/Nursery.jpg'),
      title: 'Nursery',
      price: '$60',
    },
  ];

  const list1 = portfolioItems.slice(0, 4);
  const list2 = portfolioItems.slice(4);

 
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
                    <Link to='ProductsScreen' className="add-cart">
                        <span>ADD TO CART </span> 
                        <span className='faPlusIcon'><FaPlus/></span>
                      </Link>
                    </div>
                    <img src={item.image} className="w-100" alt={item.title} style={{ height: '35vh' }} />
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
                    <h5 className="title m-0">{item.title}</h5>
                    <p className="priceStyle">{item.price}</p>
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