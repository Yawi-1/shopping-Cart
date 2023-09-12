import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';

const App = () => {
  const [product, setProduct] = useState([
      {
        "id": 1,
        "name": "Shoes",
        "price": 1999,
        "image_url":"https://shorturl.at/rJSX7"
      },
      {
        "id": 2,
        "name": "Watches",
        "price": 999,
        "image_url": "https://shorturl.at/eopFP"
      },
      {
        "id": 3,
        "name": "Canon E0S",
        "price": 29999,
        "image_url": "https://shorturl.at/pDFP8"
      },
      {
        "id": 4,
        "name": "Bicycle",
        "price": 2800,
        "image_url": "https://shorturl.at/fkTZ3"
      },
      {
        "id": 5,
        "name": "Laptop",
        "price": 49999,
        "image_url": "https://via.placeholder.com/200x150"
      },
      {
        "id": 6,
        "name": "Headphones",
        "price": 1499,
        "image_url": "https://via.placeholder.com/200x150"
      },
      {
        "id": 7,
        "name": "Backpack",
        "price": 799,
        "image_url": "https://via.placeholder.com/200x150"
      },
      {
        "id": 8,
        "name": "T-Shirt",
        "price": 499,
        "image_url": "https://via.placeholder.com/200x150"
      },
      {
        "id": 9,
        "name": "Sunglasses",
        "price": 899,
        "image_url": "https://via.placeholder.com/200x150"
      },
      {
        "id": 10,
        "name": "Smartphone",
        "price": 18999,
        "image_url": "https://via.placeholder.com/200x150"
      }
  ]);

  const [cart, setCart] = useState([]);  //This will store the items in cart
  const [showCart, setShowCart] = useState(true); //This func will toggle from shopping App to Cart

  const addItemToCart = (productToAdd) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productToAdd.id); //It will prevent from adding a same product second time

    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cart.map(item =>
        item.id === existingProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (productId) => {
    // Filter out the item with the given productId
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const increaseItemQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseItemQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCart(updatedCart);
  };

  return (
    <div>
      <Header count={cart.length} setShowCart={setShowCart} />

      {showCart ? (
        <ProductList products={product} addItemToCart={addItemToCart} />
      ) : (
        <CartList
          cart={cart}
          removeItemFromCart={removeItemFromCart}
          increaseItemQuantity={increaseItemQuantity}
          decreaseItemQuantity={decreaseItemQuantity}
        />
      )}
    </div>
  );
};

export default App;
