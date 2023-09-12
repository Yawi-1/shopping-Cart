import React from 'react';

const CartList = ({
  cart,
  removeItemFromCart, //DESRTRUCTRING
  increaseItemQuantity,
  decreaseItemQuantity,
}) => {
  return (
    <div>
      {cart.map((cartItem, cartIndex) => (
        <div key={cartIndex} className='cartItem'>
          <img src={cartItem.image_url} alt={cartItem.name}  />
          <span>{cartItem.name}</span>
          <button onClick={() => increaseItemQuantity(cartItem.id)}>+</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => decreaseItemQuantity(cartItem.id)}>-</button>
          <span>Rs. {cartItem.price * cartItem.quantity}</span>
          <button onClick={() => removeItemFromCart(cartItem.id)}>Remove</button>
        </div>
      ))}
      <p>
        Total Amount: Rs.{' '}
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </p>
    </div>
  );
};

export default CartList;
