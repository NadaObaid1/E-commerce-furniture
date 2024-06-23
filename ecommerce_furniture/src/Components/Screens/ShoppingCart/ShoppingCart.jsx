import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const items = [
    { id: 1, name: 'Pure Green One Piece', price: 2271, quantity: 0, image: require('../../assests/1 (7).jpg') },
    { id: 2, name: 'White Purple One Piece', price: 2271, quantity: 1, image: require('../../assests/1 (8).jpg')},
    { id: 3, name: 'Pure Green One Piece', price: 2271, quantity: 1, image: require('../../assests/1 (9).jpg') },
    { id: 4, name: 'Pure Green One Piece', price: 2271, quantity: 0, image: require('../../assests/1 (4).jpg') }
  ];

  const [cartItems, setCartItems] = useState(items);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    ));
  };

  const handleCheckboxChange = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.selected) {
        total += item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  useEffect(() => {
    setTotalAmount(calculateTotal());
  }, [cartItems]);

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
  };

  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Payment Submitted!');
  };

  return (
    <div className='cart'>
      <div className="cart-container">
        <h2 className="cart-header">Shopping Cart</h2>
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <input
                type="checkbox"
                checked={item.selected || false}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 0}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <span> $ {item.price}</span>
            </div>
          ))}
        </div>
        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
        <a href="/shopping" className="return-to-shopping">Return to Shopping</a>
        <div className="total-amount-due">
            <h3>Total Amount Due: $ {totalAmount}</h3>
          </div>
      </div>
      
      <div className="payment-container">
        <h2 className="payment-header">Payment</h2>
        <div className="card-preview">
          <div className="card-chip"></div>
          <div className="card-number">1234 5678 9012 3456</div>
          <div className="card-expiry">10/25</div>
          <div className="card-holder">ELON MUSK</div>
          <div className="card-logo">MasterCard</div>
        </div>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-groupC">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </div>
          <div className="form-groupC">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="XXX"
            />
          </div>
          <div className="form-groupC">
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
