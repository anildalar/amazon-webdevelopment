import './App.css';
import React, { Component } from 'react'
// import something from somelibrary

import { BrowserRouter as Router,Route } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';
import OrderHistroy from './pages/OrderHistroy';
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';
/**
* @author
* @class App
**/


//1. Class Component
//2. Functional Component
class App extends Component {
  //1. property
  //2. constructor  
  render() {
    //Fat Arrow Function
        
    return (
      <Router>
        <Route path="/" exact component={ Home } ></Route>
        <Route path="/detail" component={ Detail }></Route>
        <Route path="/signin" component={ SignIn }></Route>
        <Route path="/register" component={ Register }></Route>
        <Route path="/search" component={ Search }></Route>
        <Route path="/cart" component={ Cart }></Route>
        <Route path="/checkout" component={ Checkout }></Route>
        <Route path="/account" component={ Account }></Route>
        <Route path="/delivery" component={ Delivery }></Route>
        <Route path="/order_history" component={ OrderHistroy }></Route>
        <Route path="/wishlist" component={ Wishlist }></Route>
      </Router>
    )
  }
}


App.propTypes = {}
export default App
