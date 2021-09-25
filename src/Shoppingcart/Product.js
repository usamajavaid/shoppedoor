import React from 'react';
import './Products.css';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="product__settings">
      <img style={{marginTop:"50px"}} className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button type="button" class="btn" id="add-cart-btn" onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
