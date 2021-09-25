import React, { Component } from 'react';
import '../Style/card.css';
import Foodmenupic from '../images/Food3.jpg';
import Cabmenupic from '../images/Cab1.jpg';
import Deliverymenupic from '../images/delivery1.jpg';
import Estoremenupic from '../images/Estore2.jpg';
import CardBackground from '../images/faislabad.jpg';
import {withRouter} from 'react-router-dom';
class Card extends Component {
    foodpagebtn(food) {
        this.props.history.push(food);
      }
    render() {
        return (
            <React.Fragment>
                <div className="conatiner" id="card-container">
                    <div className="row">
                    <div className="col-sm-12 col-lg-4 col-md-6">
                        <div  id="Page2 "> 
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div class="container">
                                            <img src={Foodmenupic} id="card-img" alt="Nature"/>
                                            <div class="text-block">
                                                <p style={{marginBottom:"0px"}}>Order Your Food</p>
                                            </div>
                                        </div>    
                                    </div>
                                    <div class="flip-card-back">
                                        <div class="container">
                                        <img src={CardBackground} id="card-img" alt="Nature"/>
                                            <div class="back-text-block">
                                            <button type="button" className="fil" id="learn-about1"
                                                    onClick={() => this.foodpagebtn('/Services/Food')}
                                            >
                                                Click Here 
                                            </button>
                                            </div>
                                        </div>   
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6" >
                            <div  id="Page2 "> 
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                        <div class="container">
                                            <img src={Cabmenupic} id="card-img" alt="Nature"/>
                                            <div class="text-block">
                                                <p style={{marginBottom:"0px"}}>Book Your Cab</p>
                                            </div>
                                        </div>    
                                        </div>
                                        <div class="flip-card-back">
                                        
                                        <div class="container">
                                            <img src={CardBackground} id="card-img" alt="Nature"/>
                                            <div class="back-text-block">
                                            <button type="button" className="fil" id="learn-about1"
                                                    onClick={() => this.foodpagebtn('/Services/Cab')}
                                            >
                                                Click Here 
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6" >
                            <div  id="Page2 "> 
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                        <div class="container">
                                            <img src={Deliverymenupic} id="card-img" alt="Nature"/>
                                            <div class="text-block">
                                                <p style={{marginBottom:"0px"}}>Select For Cargo</p>
                                            </div>
                                        </div>    
                                        </div>
                                        <div class="flip-card-back">
                                        
                                        <div class="container">
                                            <img src={CardBackground} id="card-img" alt="Nature"/>
                                            <div class="back-text-block">
                                            <button type="button" className="fil" id="learn-about1"
                                                    onClick={() => this.foodpagebtn('/Services/Cargo')}
                                            >
                                                Click Here
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6">
                            <div  id="Page2 "> 
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                        <div class="container">
                                            <img src={Estoremenupic} id="card-img" alt="Nature"/>
                                            <div class="text-block">
                                                <p style={{marginBottom:"0px"}}>Online Shooping Store</p>
                                            </div>
                                        </div>    
                                        </div>
                                        <div class="flip-card-back">
                                        
                                        <div class="container">
                                            <img src={CardBackground} id="card-img" alt="Nature"/>
                                            <div class="back-text-block">
                                            <button type="button" className="fil" id="learn-about1"
                                                    onClick={() => this.foodpagebtn('/Services/Estore')}
                                            >
                                                Click Here
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(Card);