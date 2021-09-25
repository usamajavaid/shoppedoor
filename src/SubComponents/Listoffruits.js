import Main from '../Shoppingcart/Main';
import Basket from '../Shoppingcart/Basket';
import Header from '../ReusableComponents/Header';
import Cartheader from '../Shoppingcart/Header';
import data from '../Services/data';
import React, { useState } from 'react';
function Listoffruits() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <React.Fragment>
      <Header/>
    <div className="container-fluid" style={{overflowX:"hidden"}}>
      <div className="row">
        <div className="col-12">
          <Cartheader countCartItems={cartItems.length}></Cartheader>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
         <Main products={products} onAdd={onAdd}></Main>
        </div>
        <div className="col-3">
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Listoffruits;
