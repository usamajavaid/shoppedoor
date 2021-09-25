import React, { Component } from 'react';
import MastCard from '../images/payment-4.png';
import VisaCard from '../images/payment-2.png';
import PaypalCard from '../images/payment-1.png';
import CashonDelivery from '../images/cash.png';
import {connect} from 'react-redux';
class PaymentCard extends Component {
        
        state = {
         selectedOption:"",
         deliveryprice:50
        }
        
    onValueChange=(event)=>{
        this.setState({
            selectedOption: event.target.value,
        })
    }
    componentWillMount(){
            this.setState({
                deliveryprice: this.props.TotalPrice+this.state.deliveryprice
            })
            console.log("totalpricewill",this.state.totalprice)
    }
    confirmpaymentalert=()=>{
        alert("Thanks Now click on Checkout")
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <input type="radio" value="Master" 
                                checked={this.state.selectedOption === "Master"}
                                onChange={this.onValueChange}
                                />
                                <img id="paymenticons" src={MastCard} />
                        </div>
                        <div className="col-2">
                            <input type="radio" value="Visa" 
                            checked={this.state.selectedOption === "Visa"}
                            onChange={this.onValueChange}
                            />
                            <img id="paymenticons" src={VisaCard} />
                        </div>
                        <div className="col-2">
                            <input type="radio" value="Paypal" 
                            checked={this.state.selectedOption === "Paypal"} 
                            onChange={this.onValueChange}
                            />
                            <img id="paymenticons" src={PaypalCard} />
                        </div>
                        <div className="col-2">
                            <input type="radio" value="Cash" 
                            checked={this.state.selectedOption === "Cash"}
                            onChange={this.onValueChange}
                             />
                            <img id="paymenticons" src={CashonDelivery} />
                        </div>
                        <div className="col-4">
                            </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-5">
                            <div id="card__div__setings">
                                <label>Card number*</label>
                                <input className="form-control" type="text" id="card__input__setings"/>
                            </div>
                        </div>
                        <div className="col-5">
                            <div id="card__div__setings">
                                <label>Card holder*</label>
                                <input className="form-control" type="text" id="card__input__setings"/>
                            </div>
                        </div>
                        <div className="col-1">
                            </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-5">
                            <div id="card__div__setings">
                                <label>Expiry Date*</label>
                                <input className="form-control" type="text" id="card__input__setings"/>
                            </div>
                        </div>
                        <div className="col-5">
                            <div id="card__div__setings">
                                <label>CVC</label>
                                <input className="form-control" type="text" id="card__input__setings"/>
                            </div>
                        </div>
                        <div className="col-1">
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <input className="form-control" type="checkbox" style={{width:"20px"}}/>
                        </div>
                        <br/>
                        <div className="col-6">
                            <p id="save__details__heading">Save my details for future purchases</p>
                        </div>
                        <div className="col-5">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="Calculation__part">
                                <div className="row">
                                <div className="col-6">
                                    <p id="items__quantity">Total Items : {this.props.Productlist.length}</p>
                                </div>
                                <div className="col-6">
                                <p id="items__price">{this.props.TotalPrice}Rs.</p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-6">
                                <p id="items__quantity2">Deliver Charges</p>
                                </div>
                                <div className="col-6">
                                <p id="items__price2">50Rs</p>
                                {/* <p id="items__quantity">Deliver Charges</p> */}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="Calculation__part2">
                                <div className="row">
                                <div className="col-6">
                                    <p id="items__quantity">Total Amount</p>
                                </div>
                                <div className="col-6">
                                <p id="items__price">{this.state.deliveryprice}Rs</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <div className="Confirm__payment">
                                <p id="confirm__payment__heading" onClick={this.confirmpaymentalert}>Confirm payment</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToprops =state=>({
    Productlist: state.Reducer.todoList,
    TotalPrice: state.Reducer.totalprice

})

export default connect(mapStateToprops) (PaymentCard);