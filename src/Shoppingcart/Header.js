import React from 'react';
import './Products.css';
import {Link} from 'react-router-dom';
export default function Header(props) {
  return (
    <div className="Cart__header__settings">
        <div className="continue-shopping">
            <Link to="/" id="backarrow">
              <img src="/uploads/arrow.png" alt="arrow" className="arrow-icon" />
            </Link>
          <h3 id="continue__shoping__heading">continue shopping</h3>
        </div>
        <div className="cart-icon">
        <Link id="shooping-cart-icon" to="/SubComponents/Viewcart">Your Cart
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>{' '}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ''
            )}
            {' '}
          </Link>
        </div>
        
      </div>
  );
}
