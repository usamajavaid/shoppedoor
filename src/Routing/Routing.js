import React, { Component } from 'react';
import {Switch,Router,Route} from 'react-router-dom';
import history from './history';
import Home from '../Components/Home';
import About from '../Components/AboutUs';
import Help from '../Components/Help';
import Eclub from '../Components/EClub';
import LogIN from '../ReusableComponents/Login';
import Food from '../Services/Food';
import Cargo from '../Services/Cargo';
import Cab from '../Services/Cab';
import Estore from '../Services/Estore';
import Signup from '../ReusableComponents/Signup';
import Foodgallery from '../SubComponents/Foodgallery';
import Fruitlist from '../SubComponents/Listoffruits';
import Cart from '../Shoppingcart/Cart';
import Cartvieww from '../SubComponents/cartView';
import CitiesFoodView from '../ReusableComponents/CitiesFoodView';
class Routing extends Component {
    render() {
        
        return (
            
            <React.Fragment>
                
            {
                <Router history={history}>
                    <Switch>
                        <Route 
                            exact
                            path="/" 
                            render={props=><Home {...props}/>}
                        />
                        <Route 
                            exact
                            path="/Components/EClub" 
                            render={props=><Eclub {...props}/>}
                        />
                        <Route 
                            exact
                            path="/Components/AboutUs" 
                            render={props=><About {...props}/>}
                        />
                        <Route 
                            exact
                            path="/Components/Help" 
                            render={props=><Help {...props}/>}
                        />
                        <Route 
                            exact
                            path="/ReusableComponents/Login" 
                            render={props=><LogIN {...props}/>}
                        />
                        <Route 
                            exact
                            path="/Services/Food" 
                            render={props=><Food {...props}/>}
                        />
                        <Route 
                            exact
                            path="/Services/Cab" 
                            render={props=><Cab {...props}/>}
                        />
                        <Route 
                            exact
                            path="/Services/Cargo" 
                            render={props=><Cargo {...props}/>}
                        />
                        
                        <Route 
                            exact
                            path="/Services/Estore" 
                            render={props=><Estore {...props}/>}
                        />
                        <Route 
                            exact
                            path="/ReusableComponents/Signup" 
                            render={props=><Signup {...props}/>}
                        />
                        <Route 
                            exact
                            path="/SubComponents/Foodgallery" 
                            render={props=><Foodgallery {...props}/>}
                        />
                        <Route 
                            exact
                            path="/SubComponents/Listoffruits" 
                            render={props=><Fruitlist {...props}/>}
                        />
                        <Route 
                            exact
                            path="/Shoppingcart/Cart" 
                            render={props=><Cart {...props}/>}
                        />
                        <Route 
                            exact
                            path="/SubComponents/cartView" 
                            render={props=><Cartvieww {...props}/>}
                        />
                        <Route 
                            exact
                            path="/ReusableComponents/CitiesFoodView" 
                            render={props=><CitiesFoodView {...props}/>}
                        />
                    </Switch>
            </Router> 
            }
            </React.Fragment>
        )
    }
}
export default Routing;