import React, { Component } from 'react';
import Slider from 'react-slick';
import Sliderpic1 from '../images/20817630.jpg';
import Sliderpic2 from '../images/289.jpg';
import Sliderpic3 from '../images/285.jpg';
import Sliderpic4 from '../images/444.jpg';
import Sliderpic5 from '../images/489.jpg';
import Sliderpic6 from '../images/20940921.jpg';
import Sliderpic7 from '../images/11775.jpg';
import Sliderpic8 from '../images/432.jpg';
import Sliderpic9 from '../images/256.jpg';
import Freepic1 from '../images/3864210.jpg';
import Freepic2 from '../images/3864211.jpg';
import Promopic1 from '../images/3864210.jpg';
import Promopic2 from '../images/3864211.jpg';
import Promopic3 from '../images/3864210.jpg';
import Promopic4 from '../images/3864211.jpg';
import Gallery from '../SubComponents/Gallery';
import Footer from '../ReusableComponents/Footer';
class Foodtabs extends Component {
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '',
            nextArrow: '',
            pauseOnHover: true,
    
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 414,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
                
            ]
    
        };
        return (
            <React.Fragment>
                <div className="container" id="food-gallery-content">
                    <div className="row">
                        <div className="col-lg-12">
                    <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" 
                            data-toggle="tab" href="#nav-home" role="tab" 
                            aria-controls="nav-home" aria-selected="true"
                            id="tabs-style"
                        >
                            Delivery
                        </a>
                        <a class="nav-item nav-link" id="nav-profile-tab" 
                            data-toggle="tab" href="#nav-profile" role="tab" 
                            aria-controls="nav-profile" aria-selected="false"
                            id="tabs-style"
                        >
                            Shops
                        </a>
                        <a class="nav-item nav-link" id="nav-contact-tab" 
                            data-toggle="tab" href="#nav-contact" role="tab" 
                            aria-controls="nav-contact" aria-selected="false"
                            id="tabs-style"
                         >
                            Resturants
                        </a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" 
                        id="nav-home" role="tabpanel" 
                        aria-labelledby="nav-home-tab"
                    >
                        <div className="container" id="delivry-content">
                        <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <div className="permotion-cards">
                                        <img src={Promopic1} alt="" id="promo-img"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="promo-colunm">
                                    <div className="permotion-cards">
                                        <img src={Promopic2} alt="" id="promo-img"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <div className="permotion-cards">
                                        <img src={Promopic3} alt="" id="promo-img"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <div className="permotion-cards">
                                        <img src={Promopic4} alt="" id="promo-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h1 id="h1-style">Free Delivery Deals</h1>
                                </div>
                            </div>
                            <div className="row" id="free-delivery-content-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="container" id="free-img-card">
                                            <a href="/Shoppingcart/Cart" ><img src={Freepic1} alt="Food"/></a> 
                                            <div className="blook-heading">
                                                <p style={{marginBottom:"0px"}}>Free Delivery</p>
                                            </div>
                                            <div className="time-block">
                                                <p>35<br></br>Min</p>
                                            </div>
                                            <h1 id="menu-detail-heading">Special Barbecue 
                                                <i id="menu-rating-star" 
                                                    class="fa fa-star" aria-hidden="true"
                                                >
                                                    <b id="rating-text"> 3.8/5(3K+)</b>
                                                </i>
                                            </h1>
                                            <p id="menu-detail-paragraph"><b style={{color:"#4d5bd1"}}> 
                                                $$$ </b> 8 pieces
                                                 Malhi Boti 4 Peaces Kabab 1.5 Litre Drink.
                                            </p>
                                            <p><b>Free</b> delivery</p>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="right-menu-card">
                                    <div className="container" id="free-img-card">
                                            <img src={Freepic2}  alt="Food"/>
                                            <div className="blook-heading">
                                                <p style={{marginBottom:"0px"}}>Free Delivery</p>
                                            </div>
                                            <div className="time-block">
                                                <p>30<br></br>Min</p>
                                            </div>
                                            <h1 id="menu-detail-heading">Fast food  
                                                <i id="menu-rating-star" 
                                                    class="fa fa-star" aria-hidden="true"
                                                >
                                                    <b id="rating-text"> 3.9(4K+)</b>
                                                </i>
                                            </h1>
                                            <p id="menu-detail-paragraph"><b style={{color:"#4d5bd1"}}>
                                                 $$$ </b> Grill Burger,
                                                 Fries and half Litre Drink.
                                            </p>
                                            <p><b>Free</b> delivery</p>
                                        </div>
                                        </div>
                            </div>
                            <div className="row" id="slider-row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div id="Wraper9">
                                    <marquee behavior="scroll" direction="right">
                                        <h1 id="h1-style">Hat-trick Deals</h1>
                                    </marquee>
                                            <Slider {...settings}>
                                    
                                            <div  id="Page2">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic2} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic3} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic4} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic5} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic6} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic7} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic8} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic9} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            
                                    </Slider>
                                </div>
                                </div>
                                
                            </div>
                            <div className="row" id="second-slider-row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div id="Wraper9">
                                        <marquee behavior="scroll" direction="right">
                                            <h1 id="h1-style">Everyday Favourites</h1>
                                        </marquee>
                                            <Slider {...settings}>
                                    
                                            <div  id="Page2">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic2} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic3} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic4} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic5} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic6} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic7} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic8} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic9} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            
                                    </Slider>
                                </div>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Gallery/>
                                </div>
                            </div>
                        </div>
                    
                    </div>

                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" 
                        aria-labelledby="nav-profile-tab">
                            <h1 id="food-shops-heading">
                            Coming to your area soon
                            </h1>
                            <p id="food-shops-paragraph">
                            We're working our way to your 
                            neighborhood. 
                            In the meantime, 
                            check out the restaurants near you.
                            </p>
                        </div>
                    <div class="tab-pane fade" id="nav-contact" 
                        role="tabpanel" aria-labelledby="nav-contact-tab">
                            <h1 id="food-shops-heading">
                            Coming to your area soon
                            </h1>
                            <p id="food-shops-paragraph">
                            We're working our way to your 
                            neighborhood. 
                            In the meantime, 
                            check out the restaurants near you.
                            </p>
                        </div>
                </div>
                </div>
                </div>
                </div>
                <div className="container-fluid" id="food-footer">
                    <div className="row">
                        <div className="col-lg-12">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Foodtabs;