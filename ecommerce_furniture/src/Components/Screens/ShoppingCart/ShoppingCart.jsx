import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../AuthContext.js';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cart, setCart] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [unavailableProducts, setUnavailableProducts] = useState([]);

  useEffect(() => {
    fetchCart();
    fetchTotalCartPrice();
  }, [token]);

  const fetchCart = async () => {
    try {
      const response = await axios.get('https://e-commercefurniturebackend.onrender.com/cart/getCart', {
        headers: {
          Authorization: `Nada__${token}`,
        },
      });
      console.log(response.data); // Log the response data for debugging
      if (response.data.message === 'success') {
        setCart(response.data.cart);
      } else {
        console.log('No cart found.');
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTotalCartPrice = async () => {
    try {
      const response = await axios.get('https://e-commercefurniturebackend.onrender.com/cart/calculateTotalPrice', {
        headers: {
          Authorization: `Nada__${token}`,
        },
      });
      console.log(response.data); // Log the response data for debugging
      if (response.data.message === 'success') {
        setTotalCartPrice(response.data.totalCartPrice);
      } else {
        console.log('Failed to fetch total cart price:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching total cart price:', error);
    }
  };

  const handleIncreaseQuantity = async (productId) => {
    try {
      const response = await axios.put(
        'https://e-commercefurniturebackend.onrender.com/cart/increaseQuantity',
        { productId: productId },
        {
          headers: {
            Authorization: `Nada__${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.message === 'Success') {
        console.log('Quantity increased successfully');
        await fetchCart(); // Fetch the updated cart after successful increase
        await fetchTotalCartPrice(); // Fetch updated total cart price
      } else {
        console.log('Failed to increase quantity:', response.data.message);
      }
    } catch (error) {
      if (error.response.status === 401) {
        setUnavailableProducts(prevState => [...prevState, productId]);
      } else {
        console.error('Error increasing quantity:', error);
      }
    }
  };


  const handleDecreaseQuantity = async (productId) => {
    try {
      const response = await axios.put('https://e-commercefurniturebackend.onrender.com/cart/decreaseQuantity', {
        productId: productId
      }, {
        headers: {
          Authorization: `Nada__${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data.message === 'Success') {
        console.log('Quantity decreased successfully');
        await fetchCart();
        await fetchTotalCartPrice();
      } else {
        console.log('Failed to decrease quantity:', response.data.message);
      }
    } catch (error) {
      if (error.response.status === 401) {
        setUnavailableProducts(prevState => [...prevState, productId]);
      } else {
        console.error('Error decreasing quantity:', error);
      }
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.patch(`https://e-commercefurniturebackend.onrender.com/cart/removeItem`, {
        productId: productId
      }, {
        headers: {
          Authorization: `Nada__${token}`
        }
      });

      if (response.data.message === 'Success') {
        await fetchCart(); // Fetch the updated cart after successful removal
        await fetchTotalCartPrice(); // Fetch updated total cart price
      } else {
        console.log('Failed to remove item from cart:', response.data.message);
        await fetchCart(); // Fetch the updated cart after successful removal
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleRemoveCart = async () => {
    try {
      const response = await axios.patch('https://e-commercefurniturebackend.onrender.com/cart/clearCart', {}, {
        headers: {
          Authorization: `Nada__${token}`
        }
      });

      if (response.data.message === 'Success') {
        await fetchCart(); // Fetch the updated cart after successful removal
        await fetchTotalCartPrice(); // Fetch updated total cart price
      } else {
        console.log('Failed to remove item from cart:', response.data.message);
        await fetchCart(); // Fetch the updated cart
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };


  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (!cart || !cart.products || cart.products.length === 0) {
    return <div style={{marginBottom: '130px', marginTop: '20px'}}>No items in the cart.</div>;
  }

  return (
    <div className='cart'>
      <div className="cart-container">
        <h2 className="cart-header">Shopping Cart</h2>
        <div>
          {cart.products.map(item => (
            <div key={item.productId._id} className="cart-item">
              <div style={{flexDirection: 'row'}}>
              <input
                type="checkbox"
                checked={item.selected || false}
              />
              <img src={item.productId.mainImage.secure_url} alt={item.productId.name} />
              {unavailableProducts.includes(item.productId._id) && (
                <div className="unavailable-message">is not available</div>
              )}
              </div>
              <span>{item.productId.name}</span>
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.productId._id)} disabled={item.quantity === 0}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.productId._id)}>+</button>
              </div>
              <span> $ {item.productId.finalPrice}</span>
              <button onClick={() => handleRemoveFromCart(item.productId._id)} className='remove'>Remove</button>
              
            </div>
          ))}
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
        <a href="/shopping" className="return-to-shopping">Return to Shopping</a>
        <div className="total-cart-price">
          <h3>Total Cart Price: $ {totalCartPrice}</h3>
          <button onClick={() => handleRemoveCart()} className='remove'>Remove Cart</button>
        </div>
      </div>
      <div className="payment-container">
        <h2 className="payment-header">Payment</h2>
        <div className="card-preview">
          <div className="card-chip"></div>
          <div className="card-number">XXXX XXXX XXXX XXXX</div>
          <div className="card-expiry">MM/YY</div>
          <div className="card-holder">ELON MUSK</div>
          <div className="card-logo">MasterCard</div>
        </div>
        <form className="payment-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="XXX"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingCart;
