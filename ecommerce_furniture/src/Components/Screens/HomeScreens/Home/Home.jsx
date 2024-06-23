import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; 
import './Home.css';
import BackgroundImagePage from '../../BackgroundScreens/BackgroundImagePage/BackgroundImagePage.jsx';
import Categories from '../../CategoriesScreen/Categories.jsx';
import About from '../../About/About.jsx';
import Employees from '../../Employees/Employees.jsx';
import Bestseller from '../../BestsellerScreen/Bestseller.jsx';
import FAQ from '../../FAQScreen/FAQ.jsx';
import SuggestedDecorations from '../../BackgroundScreens/SuggestedDecorations/SuggestedDecorations.jsx';

const images = [
  require('../../../assests/home3.png')
];
const peopleImages = [
  require('../../../assests/person1.jpg'),
  require('../../../assests/person2.jpg'),
  require('../../../assests/person3.jpg'),
  require('../../../assests/person4.jpg'),
  require('../../../assests/person5.jpg'),
];
export default function Home() {
  return (
    <div>
        <div className='divStyle'>
          <div className='textStyle'>Explore Our Modern Furniture Collection</div>
          <p className='loremStyle'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac massa nec justo condimentum maximus ac ut tellus.
          </p>
          <div className="additional-content">
            <button className='buttonStyle'>
              <span style={{ marginRight: '5px' }}>View New Arrivals</span>
              <FaArrowRight className='arrowright' />
            </button>
            <div className="circle-container">
              {peopleImages.map((image, index) => (
                <div className="circle" key={index}>
                  <img src={image} alt={`Person ${index + 1}`} />
                </div>
              ))}
              <p className='ratings'>
                4.9 Ratings <br/>
                <p style={{ fontSize: 10, color: '#b7b7b7' }}>Trusted by 50k+ Customers</p>
              </p>
            </div>
          </div>
        </div>
        <Categories/>
        <About/>
        <Employees/>
        <SuggestedDecorations/>
        <Bestseller/>
        <BackgroundImagePage/>
        <FAQ/>
        </div>
  );
}
