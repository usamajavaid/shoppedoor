import React, { Component } from 'react';
import Usama from '../images/usamajaved.png';
import Hamza from '../images/hamza.png';
// import DrHamid from '../images/drhamid.jpg';
class Ourteam extends Component {
    render() {
        return (
    <React.Fragment>
        <div class="py-5 team3 bg-light">
            <div class="container">
                <div class="row justify-content-center mb-4">
                    <div class="col-md-7 text-center">
                        <h3 class="mb-3">
                            Experienced and Professional
                        </h3>
                        <h6 class="subtitle font-weight-normal">
                            You can relay on our amazing 
                            features list and also our customer 
                            services will be great experience 
                            for you without doubt and in no-time
                        </h6>
                    </div>
                </div>
                <div class="profile__row">
                        <img src={Usama} className="my__image__setting" style={{marginLeft:"-50px"}}/>
                        <div class="pt-2"style={{marginLeft:"70px"}}>
                            <h5 class="mt-4 font-weight-medium mb-0">Usama Javed</h5>
                            <h6 class="subtitle">MERN Stack Developer</h6>
                            <p>
                                +92 303 9351580
                                <br></br>
                                usamajaved102@gmail,comm
                                </p>
                            <p>
                                I'm a Professional developer with 3 
                                year experience in Web Development 
                                and also in relation with foreign clients.
                            </p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-facebook" aria-hidden="true" 
                                            id="ourteam-icons">
                                        </i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-twitter" aria-hidden="true">
                                        </i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-instagram" aria-hidden="true">
                                        </i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-google-plus" aria-hidden="true">
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>     
                </div>
            </div>
        </div>
    </React.Fragment>
    )}}
export default Ourteam;