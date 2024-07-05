import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../AuthContext.js';
import axios from 'axios';
import './Favourites.css';

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("https://e-commercefurniturebackend.onrender.com/favorite/getFavorite", {
          headers: {
            Authorization: `Nada__${token}`,
          },
        });
        if (response.data.message === "success") {
          setFavorites(response.data.favorite.products);
        } else {
          console.log("No favorites found.");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, [token]);

  const handleAddToCart = (productId) => {
    alert(`Adding product ${productId} to cart!`);
    // Implement your cart functionality here
  };

  const handleBuyNow = (productId) => {
    alert(`Proceeding to buy product ${productId} now!`);
    
  };

  const handleRemoveFavorite = async (productId) => {
    if (window.confirm("Are you sure you want to remove this favorite?")) {
      try {
        const response = await axios.patch(
          `https://e-commercefurniturebackend.onrender.com/favorite/removeItem`,
          { productId: productId }, 
          {
            headers: {
              Authorization: `Nada__${token}`,
            },
          }
        );
        if (response.data.message === "success") {
          setFavorites(favorites.filter(item => item.productId._id !== productId));
        } else {
          console.log("Failed to remove favorite.");
        }
      } catch (error) {
        console.error("Error removing favorite:", error);
      }
    }
  };
  
  const handleRemoveAllFavorites = async () => {
    if (window.confirm("Are you sure you want to remove all favorites?")) {
      try {
        const response = await axios.patch(
          `https://e-commercefurniturebackend.onrender.com/favorite/clearFavorite`,
          null, 
          {
            headers: {
              Authorization: `Nada__${token}`,
            },
          }
        );
        if (response.data.message === "success") {
          setFavorites([]);
        } else {
          console.log("Failed to remove all favorites.");
        }
      } catch (error) {
        console.error("Error removing all favorites:", error);
      }
    }
  };
  

  return (
    <div className='favourites'>
      <div className="favourites-container">
        {favorites.length > 0 ? (
          favorites.map(item => (
            <div key={item.productId._id} className="favourite-item">
              <img src={item.productId.mainImage.secure_url} alt={item.productId.name} />
              <div className="item-info">
                <h3>{item.productId.name}</h3>
                <p>${item.productId.finalPrice}</p>
                <div className="item-buttons">
                  <button onClick={() => handleAddToCart(item.productId._id)}>Add to Cart</button>
                  <button onClick={() => handleBuyNow(item.productId._id)}>Buy Now</button>
                  <button className="remove-favorite" onClick={() => handleRemoveFavorite(item.productId._id)}>X</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No favorites found.</p>
        )}
      </div>
      <div className="button-container">
        <button className="remove-all-favorites" onClick={handleRemoveAllFavorites}>Remove All Favorites</button>
      </div>
    </div>
  );
};

export default Favourites;
