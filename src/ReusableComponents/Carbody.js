import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Scrollbars } from "react-custom-scrollbars-2";
import 
    {IncrimentDataFunction,DecrimentDataFunction,DeleteDataFunction,ClearDataFunction,GetTotalprice}
    from '../Action/action';
import CartClass from '../ReusableComponents/cartClass';
class Carbody extends Component {
    state={
        pricecounter:0,
        totalPrice:0,
    }
    componentDidMount(){
        console.log('componentDidMountcomponentDidMount')
        var price=0;
        this.props.Productlist.map(ls=>(
            console.log('ls.priceofproduct*ls.quantity',ls.priceofproduct*ls.quantity),
            price=price+(ls.priceofproduct*ls.quantity)
        ))
        console.log('priceprice',price)
        this.setState({totalPrice:price})
        this.props.GetTotalprice(price)
        console.log('totalPricetotalPricetotalPricetotalPrice',this.state.totalPrice)
    }
    callafunction=(id)=>{

        console.log('callafunctioncallafunctioncallafunction',id)
        this.props.IncrimentDataFunction(
            new CartClass(id)
        )
       this.componentDidMount();
    }
    render() {
        return (
            <React.Fragment>
            <div className="container">
                <section className="main-cart-section">
                    <h1>shopping Cart</h1>
                    <p className="total-items">
                        you have <span className="total-items-count"></span> items
                        in shopping cart
                    </p>  
                        <div className="cart-items">
                            <div className="cart-items-container">      
                                <Scrollbars>
                                    {
                                        
                                        this.props.Productlist.map(ls=>(
                                            <div key={ls.id}>
                            {
                            <div className="items-info">                                
                                <div className="product-img">
                                    <img src={ls.imageofproduct} alt="iamge" />
                                </div>
                               
                                <div className="title">
                                    <h2>{ls.nameofproduct}</h2>
                                <p>{ls.discriptionproduct}</p>
                                </div>

                                <div className="add-minus-quantity">
                                <i className="fas fa-minus minus"
                                    onClick={()=>{
                                        this.props.DecrimentDataFunction(
                                            new CartClass(ls.id)
                                        )
                                    }} 
                                >
                                </i>
                                <input type="text" placeholder={ls.quantity}/>
                                <i className="fas fa-plus add"
                                onClick={()=>{
                                    this.callafunction(ls.id)
                                    
                                }}>
                                </i>
                                </div>
                                <div className="price">
                                <h3>{ls.priceofproduct*ls.quantity}Rs.</h3>
                                </div>

                                <div className="remove-item"
                                    onClick={()=>{
                                        this.props.DeleteDataFunction(ls.id)
                                    }}
                                >
                                <i
                                    className="fas fa-trash-alt remove"
                                ></i>
                                </div>
                            </div>
                            
                        }<hr/>
                            </div>
                            ))
                            }
                            <hr />
                    </Scrollbars>
                    </div>
                </div>
                    <div className="card-total">
                        <h3>
                            
                            Cart Total : 
                            <span>
                                {
                                   this.state.totalPrice
                                }Rs.
                            </span>
                        </h3>
                        <button className="clear-cart" onClick={this.props.ClearDataFunction}>
                            Clear Cart
                        </button>
                    </div>
            </section>
                <hr/>
        </div>
        </React.Fragment>
        )
    }
}
const mapStateToprops =state=>({
    Productlist: state.Reducer.todoList

})
export default  connect(mapStateToprops,{IncrimentDataFunction,GetTotalprice,
    DecrimentDataFunction,DeleteDataFunction,ClearDataFunction})(Carbody);

