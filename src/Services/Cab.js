import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import Cabbackground from '../images/cab-bg.jpg';
import '../Style/cab.css';
import Cabheader from '../ReusableComponents/Header';
import Bike from '../images/motor-sports.png';
import Riksha from '../images/rickshaw.png';
import Caricon from '../images/caricon.png';
import Car2 from '../images/car2.png';
class Cab extends Component {
    render() {
        return (
            <div>
                <Cabheader/>
                <div className="cab-text-block">
                    <h1 id="wraper-heading">Everyday life, made simple.</h1>
                    <p id="wraper-paragrph" style={{marginBottom:"0px"}}>
                        Ride, order food, shop, pay or become a Captain.
                        Careem is a hassle-free, one stop solution for your
                        daily needs.
                    </p>
                </div>
                <div className="cab-bg-card">
                    <img src={Cabbackground} alt="" id="cab-bg-img"/>
                </div>
                <div className="container" id="app-icon-portion">
                    <div className="row">
                        <div id="h1-style"className="col-lg-12" style={{textAlign:"center",color:"black",fontWeight:"700"}}>
                            Select your vehicle
                        </div>
                    </div>
                    <div className="row" id="products-icon-portion">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="functionality-box">
                                <img src={Bike} id="cab-icon-style" />
                                <br></br>
                                Bike
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="functionality-box">
                                <img src={Riksha} id="cab-icon-style" />
                                <br></br>
                                Riksha
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="functionality-box">
                                <img src={Caricon} id="cab-icon-style" />
                                <br></br>
                                Mini Car
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="functionality-box">
                                <img src={Car2} id="cab-icon-style" />
                                <br></br>
                                Business Car
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Footer/>
            </div>
        )
    }
}
export default Cab;