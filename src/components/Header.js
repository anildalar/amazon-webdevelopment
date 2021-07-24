import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faCartPlus, faChevronDown, faChevronRight, faMapMarkerAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags'

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
    sty = `
    .home_spritesheet{
        background: url(https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936311_.png);
      }
      .h_amazon_pos{
        background-position: -9px -38px;
      }
       .h_amz_con{
        width:100px;
        height:42px;
      }
      .h_loc_con_pos{
        width: 21px;
        height:34px;
        background-position: -71px -379px;
      }
      .foot_spritesheet{
        background-image: url('https://m.media-amazon.com/images/S/sash/rzrQQdi0aRm6Dap.png');
      }
      .a_flag_pos{
        background-position: 0 -166px;
        width:24px;
    height: 18px;
      }
      .a_arrow_pos{
        background-position: -181px -334px  !important;
        width: 16px;
        height: 17px;
      }
      .cart_con_pos{
        background-position: -10px -340px !important;
        width: 38px;
        height: 26px;
      }
      .a_header_top button {
          font-size:15px !important;
      }
    `;

    //2. constructor
    constructor(props) {
        super(props);
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

        const handleClose2 = () => {
            this.setState({ showCountryModal: false });
        }

        const handleClose = () => {
            this.setState({ show: false });
        }
        const handleShow = () => {
            this.setState({ show: true });
        };
        const handleShow2 = () => {
            this.setState({ showCountryModal: true });
        }
        return (
            <React.Fragment>
                <style>
                    {myCustomFont}
                    {this.sty}
                </style>
                <div className={'overylay w-100 h-100 ' + this.state.overylay} ></div>

                <button onClick={this.handleNavMenuClose} className={'btn-close btn-close-white AllNavMenuCloseBtn  position-fixed top-0 ' + this.state.AllNavMenuCloseBtn}></button>
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
                    <div className={'a_header_top p-1 w-100 fs-6 ' + this.state.y}>
                        <button className=" me-1 btn h-100" style={{ 'width': '11%' }}>
                            <span className=" ms-0 p-0 d-block float-start h_amz_con home_spritesheet  h_amazon_pos" ></span>
                            <span className="text-white mt-2 pt-1 float-start">.in</span>
                        </button>
                        <button className="text-start mt-1 row m-0 lh-1 text-white fs-6 me-1 btn h-100" style={{ 'width': '13%' }}>
                            <div className="p-0  ms-3" >Hello</div>
                            <a className="fw-bold p-0">
                                <span className=" ms-0  d-block float-start h_loc_con_pos home_spritesheet " ></span>
                                <span className="text-white d-block  float-start">Select your address</span>
                            </a>

                        </button>
                        <form style={{ 'width': '45%' }} className={'bg-white hform   d-inline-block ' + this.state.z}>
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
                        <button className="  a_ht_countrydd_btn btn h-100 p-0 position-relative" style={{ 'width': '5%' }}>
                            <span className="  d-block float-start p-0 foot_spritesheet  a_flag_pos"></span>
                            <span className="home_spritesheet float-start a_arrow_pos "></span>
                            <div className="text-start p-3 a_ht_countrydd position-absolute bg-white rounded-3 border">
                                <div className="arrow-up position-absolute a_au_a_ht_countrydd"></div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <hr />
                                <form>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Default radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Default checked radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Default radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Default checked radio
                                        </label>
                                    </div>
                                </form>
                                <hr />
                                <p><Flag code={'in'} height="16" /> You are shopping on Amazon.in.</p>
                                <a href="#" className="btn btn-link">Change country/region</a>
                            </div>
                        </button>
                        <button onMouseOver={this.overylay} onMouseOut={this.hideOverlay} className=" ms-1 a_ht_signin_model_btn position-relative text-start fs-6 text-white btn h-100" style={{ 'width': '10%' }}>
                            <div>Hello, Sign in</div>
                            <span className="fw-bolder">Account &amp; Lists</span>
                            <div className="a_ht_signin_model position-absolute rounded-1 bg-white border">
                                <div className="arrow-up position-absolute a_au_a_ht_signin_model"></div>
                                <div className="text-center border-bottom">
                                    <button className="btn btn-warning w-50 mt-3">Sign in</button>
                                    <p className="text-dark">New customer? <a href="#" className="btn btn-link">Start here.</a></p>
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
                                                <a className="nav-link" href="#">YourAccount</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Your Orders</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Your Wish List</a>
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
                        <button className="text-start text-white btn h-100" style={{ 'width': '7%' }}>
                            <div>Returns</div>
                            <span className="fw-bolder">&amp; Orders</span>
                        </button>
                        <button className=" ms-1 text-white btn h-100" style={{ 'width': '7%' }}>
                            <span className="d-block float-start home_spritesheet cart_con_pos"></span>
                            <span className="float-start">cart</span>
                        </button>
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