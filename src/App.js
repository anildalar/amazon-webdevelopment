import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser, faChevronRight, faBars, faSearch, faChevronDown, faCartPlus, faStar, faStarAndCrescent, faGlobe, faMoneyBill, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags';
import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import something from somelibrary
import { Button, Carousel, Modal } from 'react-bootstrap';

import { BrowserRouter as Router,Route } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
/**
* @author
* @class App
**/


//1. Class Component
//2. Functional Component
class App extends Component {
  //1. property
  //2. constructor
  constructor(props) {
    super(props);
  }

  
  render() {
    //Fat Arrow Function
        
    return (
      <Router>
        <Route path="/" exact component={ Home } ></Route>
        <Route path="/detail" component={ Detail }></Route>
        <Route path="/signin" component={ SignIn }></Route>
        <Route path="/register" component={ Register }></Route>
        <Route path="/search" component={ Search }></Route>
        <Route path="/checkout" component={ Checkout }></Route>
      </Router>
    )
  }
}


App.propTypes = {}
export default App
