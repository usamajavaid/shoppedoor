import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <div className="container" id="shooping-products">
      <div className="row">
        <div className="col-lg-12">
          <br></br>
          <h2>Products</h2>
          <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
        
      </div>
        </div>
      </div>
    </div>
    
  );
}
