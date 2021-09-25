import React, { Component } from 'react';
import '../Style/style.css';
import {connect} from 'react-redux';
import Logo from '../images/applogo.png';
import {Link} from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
      }
    loginbtn(login) {
        this.props.history.push(login);
      }
    render() {
        
        return (
            <React.Fragment>
                 <header class="top-navbar">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container">
                            <a class="navbar-brand" href="/">
                                <img src={Logo} alt="" />
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" 
                                    data-target="#navbars-rs-food" aria-controls="navbars-rs-food" 
                                    aria-expanded="false" aria-label="Toggle navigation" id="toggle-btn"
                            >
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbars-rs-food">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item "><Link class="nav-link"to="/">Home</Link></li>
                                    <li class="nav-item "><Link class="nav-link"to="/Components/EClub">Membership</Link></li>
                                    <li class="nav-item "><Link class="nav-link"to="/Components/AboutUs">About Us</Link></li>
                                    <li class="nav-item "><Link class="nav-link"to="/Components/Help">Contact Us</Link></li>
                                    <Link to="/ReusableComponents/Login">
                                    <button type="button " class="btn"  id="login-btn">Login</button>
                                    </Link>
                                    <Link to="/SubComponents/cartView">
                                    <div className="cart-icon">
                                        <img src="/uploads/cart.png" alt="cart" />
                                        <p>{this.props.Productlistlength.length}</p>
                                    </div>
                                    </Link>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                
            </React.Fragment>
        )
    }
}

const mapStateToprops =state=>({
    Productlistlength: state.Reducer.todoList,
})
export default connect(mapStateToprops)(Header);