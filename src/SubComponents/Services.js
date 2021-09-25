import React, { Component } from 'react';
import '../Style/style.css';
import Card from '../ReusableComponents/Card';
class Services extends Component {
    render() {
        return (
           <React.Fragment>
               <h1 id="Services-Heading">Services</h1>
              <Card/>
           </React.Fragment>
        )
    }
}
export default Services;