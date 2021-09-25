import React, { Component } from 'react';
import '../Style/food.css';
import TextField from '@material-ui/core/TextField';
import Foodwithoutbg from '../images/foodwithoutbg.png';
import MobilePic from '../images/mobile-phone.png';
import Explainationpage from '../ReusableComponents/Explainationpage';
import Footer from '../ReusableComponents/Footer';
import Header from '../ReusableComponents/Header';
import {withRouter} from 'react-router-dom';
class Food extends Component {
    deliverybtn(login) {
        this.props.history.push(login);
      }
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <h1 id="food-main-pageheading">It's the food you love, delivered</h1>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <img src={Foodwithoutbg} alt="" id="food-main-image"/>
                        </div>
                    </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-8 col-xs-8" id="colunm-style">
                           
                            <TextField
                                id="outlined-full-width"
                                label="Enter your full address"
                                style={{ margin: 8 }}
                                placeholder="Data from map API"
                                helperText=""
                                fullWidth
                                margin="normal"
                                size="medium"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            /> 
                        </div>
                        <div className="col-lg-6 col-sm-4 col-xs-4">
                            <button type="button" className="delivery-fill" id="food-delivery-btn"
                                    onClick={() => this.deliverybtn('/SubComponents/Foodgallery') }
                            >
                                Delivery
                            </button>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                <h1 id="h1-style">
                    Find us in these cities and many more!
                </h1>
                <div class="parent" onClick={() => this.deliverybtn('/ReusableComponents/CitiesFoodView') }>
                    <div class="child bg-one">
                        <a href="#">Lahore</a>
                    </div>
                </div>

                <div class="parent right" onClick={() => this.deliverybtn('/ReusableComponents/CitiesFoodView') }>
                    <div class="child bg-four">
                    <a href="#">Faisalabad</a>
                    </div>
                </div>

                <div class="parent" onClick={() => this.deliverybtn('/ReusableComponents/CitiesFoodView') }>
                    <div class="child bg-three">
                    <a href="#">Karachi</a>
                    </div>
                </div>

                <div class="parent right" onClick={() => this.deliverybtn('/ReusableComponents/CitiesFoodView') }>
                    <div class="child bg-two">
                    <a href="#">Islamabad</a>
                    </div>
                </div>

                <div class="parent" onClick={() => this.deliverybtn('/ReusableComponents/CitiesFoodView') }>
                    <div class="child bg-five">
                    <a href="#">Rawalpindi</a>
                    </div>
                </div>

                <div class="parent right" onClick={() => this.deliverybtn('/ReusableComponents/CitiesFoodView') }>
                    <div class="child bg-six">
                    <a href="#">Bhawalpur</a>
                    </div>
                </div>
                <div class="parent" onClick={() => this.deliverybtn('/ReusableComponents/CitiesFoodView') }>
                    <div class="child bg-seven">
                    <a href="#">Multan</a>
                    </div>
                </div>

                <div class="parent right" onClick={() => this.deliverybtn('/ReusableComponents/CitiesFoodView') }>
                    <div class="child bg-eight">
                    <a href="#">Shakhupura</a>
                    </div>
                </div>
                </div>
                <div className="container-fluid">
                    <div className="row" id="download-food-app">
                        <div className="col-lg-6 col-md-6 col-xs-6">
                                    <h1 style={{marginTop:"100px"}}>
                                        Download the food you love
                                    </h1>
                                    <p>
                                        It's all at your fingertips -- the restaurants you love. 
                                        Find the right food to suit your mood, and make the first bite last. 
                                        Go ahead, download us.
                                    </p>
                                    <div class="flex social-btns">
                                        <a class="app-btn blu flex vert" href="http:apple.com">
                                        <i class="fa fa-apple" aria-hidden="true"></i>
                                            <p>Available on the <br/> <span class="big-txt">App Store</span></p>
                                        </a>

                                        <a class="app-btn blu flex vert" href="http:google.com">
                                        <i class="fa fa-play" aria-hidden="true"></i>
                                            <p>Get it on <br/> <span class="big-txt">Google Play</span></p>
                                        </a>
                                        </div>
                                
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-6">
                            <img src={MobilePic} alt="" id="download-img"/>
                        </div>
                    </div>
                </div>
                <Explainationpage/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default withRouter(Food);