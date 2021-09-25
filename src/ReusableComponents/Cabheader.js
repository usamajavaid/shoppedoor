import React, { Component } from 'react';
import '../Style/cab.css';
import Logo from '../images/applogo.png';
class Cabheader extends Component {
    render() {
        return (
            <React.Fragment>
               <header className="header">
                    <nav className="navbar navbar-expand-lg fixed-top py-3">
                        <div className="container"><a href="/" class="navbar-brand text-uppercase font-weight-bold">
                            <img src={Logo} alt="" /></a>
                            <button id="header-toggle-btn" type="button" data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" aria-label="Toggle navigation" 
                                className="navbar-toggler navbar-toggler-right">
                                Login <i className="fa fa-bars"></i>
                            </button>
                            
                            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active"><a href="#" class="nav-link text-uppercase font-weight-bold">
                                        About us <span class="sr-only">(current)</span></a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">
                                        More for YOU</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">
                                        Safety</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">
                                        Join the team</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">
                                        Help</a></li>
                                </ul>
                                <form class="form-inline my-2 my-lg-0">
                                    <button class="btn btn-outline-success my-2 my-sm-0" 
                                            type="submit" style={{marginLeft:"100px"}}
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}
export default Cabheader;