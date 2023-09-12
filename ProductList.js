import React from 'react';

const ProductList = ({ products, addItemToCart }) => {
  return (
    <div className='products'>
      {products.map((product) => (
        <div key={product.id} className='product-card'>
          <img src={product.image_url} alt={product.name} />
          <h3>{product.name}</h3>
          <h5>Rs. {product.price}</h5>
          <button onClick={() => addItemToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
