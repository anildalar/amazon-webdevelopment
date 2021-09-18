
//1. Import Area

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faCartPlus, faChevronDown, faChevronRight, faMapMarkerAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags'

//1. import { NamedImport } from 'somelibrary';
//2. import defaultImport from 'somelibrary';

import { Link,NavLink } from 'react-router-dom';

//import something from something
import Ember from '../assets/fonts/ember/AmazonEmber_Rg.ttf';

const myCustomFont = `
    @font-face{
        font-family:'emberRg';
        src:url( '${Ember}') format('truetype');
    }
    html,body{
        font-family:'emberRg',Arial,sans-serif !important;
    }
`;

/**
* @author
* @class Header
**/

class Header extends Component {
    //1. properties
    state = {
        AllNavMenu: 'l366',
        y: '',
        z: '',
        overylay: 'a_invisible',
        show: false,
        showCountryModal: false,
        AllNavMenuCloseBtn: 'd-none'
    }
    //3.Method
    componentDidMount() {
        //this is the life cyle method that will be called when page is loaded successfully
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        /* console.log('ok ' + window.scrollY); */
        if (window.scrollY >= 60) {//if scroll amount is greater than 50 then we will 
            // Add 'position-fixed top-0 start-0'
            this.setState({ y: 'position-fixed top-0 start-0' });
        } else {
            // Remove 'position-fixed top-0 start-0'
            this.setState({ y: '' });

        }
    }
    formHandle = () => {
        if (this.state.z === 'formboder') {
            this.setState({ z: '' })
        } else {
            this.setState({ z: 'formboder' })
        }

    }
    // this.overlay
    hideOverlay = () => {
        this.setState({ overylay: 'a_invisible' });
    }
    overylay = () => {
        this.setState({ overylay: 'a_visible' });
    }
    handleNavMenu = () => {
        this.setState({ AllNavMenu: 'l0', AllNavMenuCloseBtn: 'd-block', overylay: 'a_visible' });
    }
    handleNavMenuClose = () => {
        this.setState({ AllNavMenu: 'l366', AllNavMenuCloseBtn: 'd-none', overylay: 'a_invisible' });
    }
    //3. Method
    render() {
        //overlay 
        
        return (
            <React.Fragment>
                <style>
                    {myCustomFont}
                </style>
                <div className={'overylay w-100 h-100 ' + this.state.overylay} ></div>

                <button onClick={this.handleNavMenuClose} className={'btn-close btn-close-white AllNavMenuCloseBtn position-fixed top-0 ' + this.state.AllNavMenuCloseBtn}></button>
                <div className={'AllNavMenu h-100 position-fixed top-0 ' + this.state.AllNavMenu}>
                    <div className="AllNavMenuHeader text-white mhcolor p-3">
                        <h5 className="modal-title " id="staticBackdropLabel"><FontAwesomeIcon icon={faUser} /> Hello, Sign in</h5>
                    </div>
                    <div className="AllNavMenuBody overflow-scroll bg-white ps-0 pe-0 pt-2">
                        <h5 className="fw-bolder ps-4">Trending</h5>
                        <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Echo &amp; Alexa </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">New Release</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Movies and Shakers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Disabled</a>
                            </li>
                        </ul>
                        <h5 className="fw-bolder ps-4">Digital Content And Devices</h5>
                        <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Echo &amp; Alexa <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fire TV <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kindle Ebooks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Audible Audiobooks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Audible Prime Video</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Audible Prime Music</a>
                            </li>
                        </ul>
                        <h5 className="fw-bolder ps-4">Shop By Department</h5>
                        <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mobile &amp; Computer <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TV,Appliances,Electronics <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Men's Fashion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Women's Fashion</a>
                            </li>
                        </ul>
                        <h5 className="fw-bolder ps-4">Programs &amp; Features</h5>
                        <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gift Cards &amp; Mobile Rechanges <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fligh Ticket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Amazon Assistance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Full Store Directory</a>
                            </li>
                        </ul>
                        <h5 className="fw-bolder ps-4">Help &amp; Settings</h5>
                        <ul className="nav flex-column pt-1 mb-2 mhul">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Your Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Customer Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Signin</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <header>
                    <div className={'a_header_top p-1 w-100 ' + this.state.y}>
                        <NavLink to="/" className="me-1 btn h-100" style={{ 'width': '10%' }}>
                            <img className="img-fluid" src="./logo.png" />
                        </NavLink>
                        <button className="text-start row m-0 lh-1 text-white fs-6 me-1 btn h-100" style={{ 'width': '10%' }}>
                            <div className="col-2 p-0"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                            <div className="col-10 p-0 fw-bolder">
                                Deliver to Sunil

                                <span className="fw-bold d-block"><span className="a_city">Neemuch</span><span className="a_pincode">458441</span></span>
                            </div>

                        </button>
                        <form className={'bg-white hform  w-50 d-inline-block ' + this.state.z}>
                            <div className="row m-0">
                                <div className="col-1 p-0 border-end">
                                    <div className="btn-group" role="group">
                                        <button id="btnGroupDrop1" type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            All
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                            <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-10 p-0">
                                    <input onBlur={this.formHandle} onFocus={this.formHandle} className="h-100 form-control rounded-0" />
                                </div>
                                <div className="col-1 p-0">
                                    <button className="w-100 hformsbmt h-100 btn btn-warning" type="submit" ><FontAwesomeIcon className="text-dark fs-4" icon={faSearch} /> </button>
                                </div>
                            </div>
                        </form>
                        <button className="a_ht_countrydd_btn btn h-100 p-0 position-relative" style={{ 'width': '4%' }}>
                            <Flag className="d-inline-block me-1" code={'in'} height="16" /><FontAwesomeIcon className="text-white d-inline-block" icon={faChevronDown} />
                            <div className="text-start p-3 a_ht_countrydd position-absolute bg-white rounded-3 border">
                                <div className="arrow-up position-absolute a_au_a_ht_countrydd"></div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"  />
                                    <label className="form-check-label" >
                                        Default radio
                                    </label>
                                </div>
                                <hr />
                                <form>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"  />
                                        <label className="form-check-label" >
                                            Default radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"  />
                                        <label className="form-check-label" >
                                            Default checked radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"  />
                                        <label className="form-check-label" >
                                            Default radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"  />
                                        <label className="form-check-label" >
                                            Default checked radio
                                        </label>
                                    </div>
                                </form>
                                <hr />
                                <p><Flag code={'in'} height="16" /> You are shopping on Amazon.in.</p>
                                <a href="#" className="btn btn-link">Change country/region</a>
                            </div>
                        </button>
                        <button onMouseOver={this.overylay} onMouseOut={this.hideOverlay} className="a_ht_signin_model_btn position-relative text-start fs-6 text-white btn h-100" style={{ 'width': '8%' }}>
                            <div>Hello, Sign in</div>
                            <span className="fw-bolder">Account &amp; Lists</span>
                            <div className="a_ht_signin_model position-absolute rounded-1 bg-white border">
                                <div className="arrow-up position-absolute a_au_a_ht_signin_model"></div>
                                <div className="text-center border-bottom">
                                    <Link to="/signin" className="btn btn-warning w-50 mt-3">Sign in</Link>
                                    <p className="text-dark">New customer? <Link to="/register" className="btn btn-link">Start here.</Link></p>
                                </div>
                                <div className="row m-0">
                                    <div className="col p-2">
                                        <h5 className="text-dark m-0">Your List</h5>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Create a Wish list</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Find a Wish list</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Wish from anywebsite</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Baby Wishlist</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Discover your style</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Explore Showroom</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col p-2">
                                        <h5 className="text-dark m-0">Your Account</h5>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/account">Your Account</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/order_history">Your Orders</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/wishlist">Your Wish List</Link>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Your Recommendations</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Your Prime Membership</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Your Prime Video</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Your Subscribe &amp; Save Items</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Membership &amp; Subscription </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Your Amazon Business Account</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Your Seller Account</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Manage Your Content and Devices</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button className="text-start text-white btn h-100" style={{ 'width': '8%' }}>
                            <div>Returns</div>
                            <span className="fw-bolder">&amp; Orders</span>
                        </button>
                        <Link to="/cart" className="text-white btn h-100" style={{ 'width': '8%' }}>
                            <FontAwesomeIcon className="fs-3" icon={faCartPlus} /> Cart
                        </Link>
                    </div>
                    <div className="a_header_bottom">
                        <ul className="nav mt-1 ms-2 float-start">
                            <li className="nav-item">
                                <a onClick={this.handleNavMenu} className="nav-link" href="#"><FontAwesomeIcon icon={faBars} /> All</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Best Seller</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mobile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Electronics</a>
                            </li>
                            <li className="nav-item position-relative">
                                <a onMouseOut={this.hideOverlay} onMouseOver={this.overylay} className="nav-link prime" href="#">Prime <FontAwesomeIcon icon={faCaretDown} /></a>
                                <div className="primeBox bg-white rounded-1 position-absolute p-3 d-none">
                                    <div className="arrow-up position-absolute a_aup_prime"></div>
                                    <img className="img-fluid" src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg" />
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fashion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">New Release</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Customer Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Amazon Pay</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Computers</a>
                            </li>
                        </ul>
                        <a href="#" className="float-end">
                            <img src="./images/header_banner.jpg" />
                        </a>
                        <ul className="nav mt-1 float-start d-none">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home &amp; Kitchen</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Today's Deal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Toy's &amp; Games</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sell</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Coupons</a>
                            </li>
                        </ul>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}


Header.propTypes = {}
export default Header