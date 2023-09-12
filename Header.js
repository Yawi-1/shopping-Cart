import React from 'react';

const Header = ({ count, setShowCart }) => {
  const showCart = () => {
    setShowCart(false);
    if (count === 0) {
      alert('Cart is empty');
    }
  };

  const showProducts = () => {
    setShowCart(true);
  };

  return (
    <div className='header'>
      <button onClick={showProducts}>Shopping Cart App</button>
      <button onClick={showCart}>
        Cart <sup>{count}</sup>
      </button>
    </div>
  );
};

export default Header;
