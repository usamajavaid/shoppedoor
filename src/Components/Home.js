import React, { Component } from 'react';
import HomeSlider from '../SubComponents/HomeSlider';
import Footer from '../ReusableComponents/Footer';
import Header from '../ReusableComponents/Header';
import Services from '../SubComponents/Services';
import Review from '../SubComponents/UserReview';
import Ourteam from '../SubComponents/Ourteam';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{overflowX:"hidden",overflowY:"hidden"}}>
                    <Header/>
                    <HomeSlider/>
                    <Services/>
                    <Review/>
                    <Ourteam/>
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;