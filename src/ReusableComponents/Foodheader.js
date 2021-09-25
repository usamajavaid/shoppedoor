import React, { Component } from 'react';
import Logo from '../images/applogo.png';
import '../Style/style.css';
 class Foodheader extends Component {
    render() {
        return (
            <React.Fragment>
                 <header className="food-header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img src={Logo} alt=""/></a>
                            <div class="navbar-nav" id="food-top-links">
                            <a href="#" className="text-decoration-none d-block px-1" >
                                <i className="fa fa-user-circle" aria-hidden="true" id="food-header-link">
                                    <b id="food-top-link-style"> Login</b></i>
                            </a>
                            <a href="#" className="text-decoration-none d-block px-1">
                                <i className="fa fa-shopping-bag" aria-hidden="true" id="food-header-link">
                                    <b id="food-top-link-style"> Your Cart</b></i>
                            </a>
                            </div>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}
export default Foodheader;