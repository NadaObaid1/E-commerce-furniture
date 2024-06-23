import React from 'react';
import './Favourites.css';

const Favourites = () => {
  const favourites = [
    { id: 1, name: 'Neauthy Night Regime', price: 24, image: require('../../assests/1 (7).jpg') },
    { id: 2, name: 'Charcoal Kit by Lumin', price: 40, image: require('../../assests/1 (6).jpg') },
  ];

  const handleAddToCart = (id) => {
    alert(`Item ${id} added to cart!`);
  };

  const handleBuyNow = (id) => {
    alert(`Proceeding to buy item ${id} now!`);
  };

  return (
    <div className='favourites'>
    <div className="favourites-container">
      {favourites.map(item => (
        <div key={item.id} className="favourite-item">
          <img src={item.image} alt={item.name} />
          <div className="item-info">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div className="item-buttons">
              <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
              <button onClick={() => handleBuyNow(item.id)}>Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Favourites;
