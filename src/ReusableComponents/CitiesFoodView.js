import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from '../SubComponents/Menu';
class CitiesFoodView extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div style={{marginTop:"200px"}}>
                <Menu/>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default CitiesFoodView;