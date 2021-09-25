import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Foodtabs from '../SubComponents/Foodtabs';
class Foodgallery extends Component {
    render() {
       
        return (
            <React.Fragment>
                <Header/>
                <Foodtabs/>
            </React.Fragment>
        )
    }
}
export default Foodgallery;