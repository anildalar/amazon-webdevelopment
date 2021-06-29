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
        x: 'l934',
        y: '',
        z: '',
        overylay:'a_invisible',
        show: false,
        showCountryModal: false,
        showAllModal: false
      }
    //2. constructor
    constructor(props){
        super(props);
    }
    //3.Method
  componentDidMount() {
    //this is the life cyle method that will be called when page is loaded successfully
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    console.log('ok ' + window.scrollY);
    if (window.scrollY >= 60) {//if scroll amount is greater than 50 then we will 
      // Add 'position-fixed top-0 start-0'
      this.setState({ y: 'position-fixed top-0 start-0' });
    } else {
      // Remove 'position-fixed top-0 start-0'
      this.setState({ y: '' });
    }
  }
  closemodal = () => {
    this.setState({ x: 'l934' });
  }
  handleModal = () => {
    this.setState({ x: 'l433' })
  }
  formHandle = () => {
    if (this.state.z === 'formboder') {
      this.setState({ z: '' })
    } else {
      this.setState({ z: 'formboder' })
    }

  }
  // this.overlay
  hideOverlay = ()=>{
    this.setState({overylay:'a_invisible'});
  }
  overylay = ()=>{
    this.setState({overylay:'a_visible'});
  }

    //3. Method
    render() {
        //overlay 

        //Fat Arrow Function
        const handleShow3 = () => {
            this.setState({ showAllModal: true });
        }
        const handleClose3 = () => {
            this.setState({ showAllModal: false });
        }


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
                </style>
                <div className={'overylay w-100 h-100 ' + this.state.overylay} ></div>
                <Modal className={'headermodal h-100 '} show={this.state.showAllModal} onHide={handleClose3} animation={false}  >
                    <Modal.Header className="text-white mhcolor">
                        <h5 className="modal-title " id="staticBackdropLabel"><FontAwesomeIcon icon={faUser} /> Hello, Sign in</h5>
                        <button onClick={this.closemodal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </Modal.Header>
                    <Modal.Body className="ps-0 pe-0 pt-2 pb-2">
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
                    </Modal.Body>
                </Modal>
                <Modal className="a_ht_countrydd" animation={false} show={this.state.showCountryModal} onHide={handleClose2}>
                    <Modal.Header>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </Modal.Header>
                    <Modal.Body>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <p><Flag code={'in'} height="16" /> You are shopping on Amazon.in.</p>
                        <a href="#" className="btn btn-link">Change country/region</a>
                    </Modal.Footer>
                </Modal>
                <Modal className="a_ht_signin_model" show={this.state.show} onHide={handleClose} animation={false}>
                    <Modal.Header className="text-center a_signin_model" closeButton>
                        <button className="btn btn-warning w-50">Sign in</button>
                        <p>New customer? <a href="#" className="btn btn-link">Start here.</a></p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col">
                                <h5>Your List</h5>
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
                            <div className="col">
                                <h5>Your Account</h5>
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
                    </Modal.Body>
                </Modal>
                <header>
                    <div className={'a_header_top p-1 w-100 ' + this.state.y}>
                        <button className="me-1 btn h-100" style={{ 'width': '10%' }}>
                            <img className="img-fluid" src="./logo.png" />
                        </button>
                        <button className="text-start row m-0 lh-1 text-white fs-6 me-1 btn h-100" style={{ 'width': '10%' }}>
                            <div className="col-2 p-0"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                            <div className="col-10 p-0 fw-bolder">
                                Deliver to Anil

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
                        <button onMouseOver={handleShow2} className="btn h-100 p-0" style={{ 'width': '4%' }} data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <Flag className="d-inline-block me-1" code={'in'} height="16" /><FontAwesomeIcon className="text-white d-inline-block" icon={faChevronDown} />
                        </button>
                        <button onMouseEnter={handleShow} className="text-start fs-6 text-white btn h-100" style={{ 'width': '8%' }} data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <div>Hello, Sign in</div>
                            <span className="fw-bolder">Account &amp; Lists</span>
                        </button>
                        <button className="text-start text-white btn h-100" style={{ 'width': '8%' }}>
                            <div>Returns</div>
                            <span className="fw-bolder">&amp; Orders</span>
                        </button>
                        <button className="text-white btn h-100" style={{ 'width': '8%' }}>
                            <FontAwesomeIcon className="fs-3" icon={faCartPlus} /> Cart
                        </button>
                    </div>
                    <div className="a_header_bottom">
                        <ul className="nav mt-1 ms-2 float-start">
                            <li className="nav-item">
                                <a onClick={handleShow3} className="nav-link" href="#"><FontAwesomeIcon icon={faBars} /> All</a>
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
                                    <div className="arrow-up position-absolute"></div>
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