import React, { Component } from 'react';
import Routing from './Routing/Routing';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import Shoping from './Shoppingcart/Cart';
// import Review from './SubComponents/UserReview'
import store from './Store/store';
import {Provider} from 'react-redux';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Routing/>
        </Provider>
      </React.Fragment>
    )
  }
}

export default App;
