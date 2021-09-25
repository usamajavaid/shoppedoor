import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Cartview from '../SubComponents/cartView';
import Footer from '../ReusableComponents/Footer';
import Ourteam from '../SubComponents/Ourteam';
class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <div class='active-page'>
                <Header/>
                <div style={{marginTop:"100px"}}>
                <Ourteam/>
                </div>
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutUs;