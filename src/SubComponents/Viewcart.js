import { useState } from 'react';
import Main from '../Shoppingcart/Main';
import Basket from '../Shoppingcart/Basket';
import Header from '../ReusableComponents/Header';
import Cartheader from '../Shoppingcart/Header';
import data from '../Services/data';
function Viewcart() {
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
    <div className="App" style={{overflowX:"hidden"}}>
      <Header/>
      <Cartheader countCartItems={cartItems.length}></Cartheader>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
      </div>
    </div>
  );
}

export default Viewcart;