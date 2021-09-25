import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Menu from '../SubComponents/Menu';
import Footer from '../ReusableComponents/Footer';
import './eclub.css';
class EClub extends Component {
    render() {
        return (
            <React.Fragment>
                <div class='active-page'>
                <Header/>
                <div className="eclub__background" style={{marginTop:"200px"}}>
                    <div class="header">
                            <h1>Reliable, efficient delivery</h1>
                            <h1>Powered by Shoppe Door</h1>

                            <p>Our Artificial Intelligence powered tools use millions of project data points
                            to ensure that your project is successful</p>
                        </div>
                        <div class="row1-container">
                            <div class="box box-down cyan">
                            <h2>Green Card</h2>
                            <p>6 months subscription
                                15 Loyality points Daily and you can get special offers daily.</p>
                                <h1><b>199$</b></h1>
                                <br/>
                                <button type="button" class="btn btn-outline-danger">Apply</button>
                            <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
                            </div>

                            <div class="box red">
                            <h2>Red Card</h2>
                            <p>1 Year subscription
                                20 Loyality points Daily and you can get special offers daily.</p>
                                <h1><b>400$</b></h1>
                                <br/>
                                <button type="button" class="btn btn-outline-danger">Apply</button>
                            <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
                            </div>

                            <div class="box box-down blue">
                            <h2>Blue card</h2>
                            <p>3 months subscription
                                10 Loyality points Daily and you can get special offers daily.</p>
                                <h1><b>100$</b></h1>
                                <br/>
                                <button type="button" class="btn btn-outline-danger">Apply</button>
                            <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
                            </div>
                        </div>
                        <div class="row2-container">
                            <div class="box orange">
                            <h2>Yellow Card</h2>
                            <p>1 months subscription
                                5 Loyality points Daily and you can get special offers daily.</p>
                                <h1><b>49$</b></h1>
                                <br/>
                                <button type="button" class="btn btn-outline-danger">Apply</button>
                            <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default EClub;