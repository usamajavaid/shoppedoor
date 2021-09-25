import React, { Component } from 'react';
import './userreview.css';
import Slider from 'react-slick';
import Usama from '../images/usama12.jpeg';
class UserReview extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                        <Slider
                    arrows={false} 
                    speed ={1000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={2000}
                >
                <div id="Page"> 
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="review__card__pic" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div className="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star-half" ></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>      
                </div>
                <div id="Page">
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="review__card__pic" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div class="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star" style={{color:" rgb(153, 152, 152)"}}></i>&nbsp;&nbsp;
                                        <i class="fa fa-star" style={{color:" rgb(153, 152, 152)"}}></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>
                </div>
                <div id="Page">
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="review__card__pic" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div class="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star" style={{color:" rgb(153, 152, 152)"}} ></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>
                </div>
                <div id="Page">
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="review__card__pic" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div class="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star-half"></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>
                </div>
                <div id="Page">
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="review__card__pic" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div class="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>
                </div>
                </Slider>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default UserReview;