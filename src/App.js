import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser, faChevronRight, faBars, faSearch, faChevronDown, faCartPlus, faStar, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags';
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class App
**/

class App extends Component {
  //1. property
  state = {
    x: 'l934',
    y: '',
    z: ''
  }
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
    if (this.state.z == 'formboder') {
      this.setState({ z: '' })
    } else {
      this.setState({ z: 'formboder' })
    }

  }
  handleCountryDD = () => {
    //alert('ok');
    //Show the exampleModel2 
    // var modalToggle = document.getElementById('exampleModal2'); // relatedTarget
    //myModal.show(modalToggle)
    // modalToggle.modal('show');
  }
  render() {
    return (
      <div>
        <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className={'h-100 modal-dialog modal-dialog-scrollable headermodal ' + this.state.x} >
            <div className="modal-content">
              <div className="modal-header text-white mhcolor">
                <h5 className="modal-title " id="staticBackdropLabel"><FontAwesomeIcon icon={faUser} /> Hello, Sign in</h5>
                <button onClick={this.closemodal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body ps-0 pe-0 pt-2 pb-2">
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
              <div className="">

              </div>
            </div>
          </div>
        </div>
        <div className="modal show a_ht_countrydd" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
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
              </div>
              <div className="modal-footer">
                <p><Flag code={'in'} height="16" /> You are shopping on Amazon.in.</p>
                <a href="#" className="btn btn-link">Change country/region</a>
              </div>
            </div>
          </div>
        </div>
        <div className="modal a_ht_signin_model" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModal3Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-center a_signin_model">
                <button className="btn btn-warning w-50">Sign in</button>
                <p>New customer? <a href="#" className="btn btn-link">Start here.</a></p>
              </div>
              <div className="modal-body">
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
              </div>
            </div>
          </div>
        </div>
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
            <form className={'bg-white hform w-50 d-inline-block ' + this.state.z}>
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
                  <button className="w-100 h-100 btn btn-warning rounded-0" type="submit" ><FontAwesomeIcon className="text-dark fs-4" icon={faSearch} /> </button>
                </div>
              </div>
            </form>
            <button onMouseOver={this.handleCountryDD} className="btn h-100 p-0" style={{ 'width': '4%' }} data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <Flag className="d-inline-block me-1" code={'in'} height="16" /><FontAwesomeIcon className="text-white d-inline-block" icon={faChevronDown} />
            </button>
            <button className="text-start fs-6 text-white btn h-100" style={{ 'width': '8%' }} data-bs-toggle="modal" data-bs-target="#exampleModal3">
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
            <ul className="nav mt-1 ms-3 float-start">
              <li className="nav-item">
                <a onClick={this.handleModal} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="nav-link" href="#"><FontAwesomeIcon icon={faBars} /> All</a>
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
        <div className="a_main position-relative">
          <div className="a_main1 a_main_top">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./images/slider/1.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/2.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/3.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/4.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/5.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/6.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/7.jpg" className="d-block" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="ml-1 position-absolute a_main_bottom">
            <div className="a_main_bottom_1 row m-0 mb-3">
              <div className="col p-2">
                <div className="a_mainbox1 p-3">
                  <div className="a_mainbox1_inner w-100 h-100 bg-danger">
                    <div className=" w-100 bg-warning">
                      <h5>Top picks for your home</h5>
                      <div className="row m-0">
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="text-start p-0 rounded-0 btn btn-success w-100 h-100">
                            <img className="img-fluid" src="./images/main_imgs/1.jpg" />
                            ACs
                          </a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="text-start p-0 rounded-0 btn btn-success w-100 h-100">
                            <img className="img-fluid" src="./images/main_imgs/2.jpg" />
                            Refigerators
                          </a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="text-start p-0 rounded-0 btn btn-success w-100 h-100">
                            <img className="img-fluid" src="./images/main_imgs/3.jpg" />
                            Microwaves
                          </a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="text-start p-0 rounded-0 btn btn-success w-100 h-100">
                            <img className="img-fluid" src="./images/main_imgs/4.jpg" />
                            Washing Machines
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="a_mainbox1 p-3">
                  <div className="a_mainbox1_inner w-100 h-100 bg-danger">
                    <div className=" w-100 bg-warning">ASD</div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="a_mainbox1 p-3">
                  <div className="a_mainbox1_inner w-100 h-100 bg-danger">
                    <div className=" w-100 bg-warning">ASD</div>
                    <a href="#" className="btn btn-link">See More</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-12 p-3 bg-white tbdr mb-4" style={{ 'height': 150 + 'px' }}>
                    <h4 className="mb-3">Sign in for your best experience</h4>
                    <button className="btn btn-warning w-100 border border-secondary rounded-1">Sign in securely</button>
                  </div>
                  <div className="col-12 p-3 bg-white border border-secondary" style={{ 'height': 248 + 'px' }}>
                    <div className="bg-success mb-2" style={{ 'height': 170 + 'px' }}>
                      <img src="https://m.media-amazon.com/images/G/01/d16g/kpw/transparent-1x1.png" />
                      <h6>TECNO Spark 7T(Magnet Black, 4GB RAM</h6>
                    </div>
                    <div className="float-start">
                      <FontAwesomeIcon className="text-warning" icon={faStar} />
                      <FontAwesomeIcon className="text-warning" icon={faStar} />
                      <FontAwesomeIcon className="text-warning" icon={faStar} />
                      <FontAwesomeIcon className="text-warning" icon={faStar} />
                      <FontAwesomeIcon className="text-white border" icon={faStar} />
                      <span className="ratingCount">21</span>
                      <div>$1,900.00 </div>
                    </div>
                    <button className="btn btn-warning btn-sm float-end">Shop now</button>
                  </div>
                </div>
              </div>

            </div>
            <div className="a_main_bottom_2 row m-0 mb-3">
              <div className="col-6">A</div>
              <div className="col-3">B</div>
              <div className="col-3">C</div>
            </div>
            <div className="a_main_bottom_3 p-3">
              <div className="">
                <h3 className="float-start">Today's Deals</h3><button type="button" className="float-start btn btn-link">see all deals</button>
              </div>
              <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                  <div className="carousel-item active">
                    <div className="imgCont row">
                      <div className="col">1</div>
                      <div className="col">2</div>
                      <div className="col">3</div>
                      <div className="col">4</div>
                      <div className="col">5</div>
                      <div className="col">6</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgCont row">
                      <div className="col">7</div>
                      <div className="col">8</div>
                      <div className="col">9</div>
                      <div className="col">10</div>
                      <div className="col">11</div>
                      <div className="col">12</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgCont row">
                      <div className="col">13</div>
                      <div className="col">14</div>
                      <div className="col">15</div>
                      <div className="col">16</div>
                      <div className="col">17</div>
                      <div className="col">18</div>
                    </div>
                  </div>
                </div>
                <button className="a_cc carousel-control-prev rounded-end" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="a_cc carousel-control-next rounded-start" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

        </div>
        <footer>
          <a href="#" className="btn btn-success w-100 rounded-0 border-0 lh-lg" style={{ backgroundColor: '#37475a', height: '50px' }}>Back to top</a>
          <div className="a_footer_top pb-5">
            <div className="container pt-5">
              <div className="row text-white">
                <div className="col-3">
                  <h6>Get to Know Us</h6>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Carrers</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Press Releases</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link" href="#">Amazon Cares</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link" href="#">Gift a Smile</a>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <h6>Connect with Us</h6>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Facebook</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Twitter</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Instagram</a>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <h6>Make Money with Us</h6>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sell on Amazon</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sell under Amazon Accelerator</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Amazon Global Selling</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link " href="#">Become an Affiliate</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link " href="#">Fulfilment by Amazon</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link " href="#">Advertise Your Products</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link " href="#">Amazon Pay on Merchants</a>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <h6>Let Us Help You</h6>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">COVID-19 and Amazon</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Your Account</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Return Centre</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link" href="#">100% Purchase Protection</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link" href="#">Amazon App Download</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link" href="#">Amazon Assistance Download Protection</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link" href="#">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="text-secondary" />
            <div className="d-flex justify-content-center">
                <a href="#" className="btn me-5">
                  <img className="img-fluid" src="./logo.png" />
                </a>
                <a href="#" className="btn btn-danger">B</a>
              </div>
            <div class="d-flex justify-content-center">
              
              <ul className="nav">
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Australia</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Brazil</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Australia</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Brazil</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Australia</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Brazil</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Australia</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Brazil</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Australia</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Brazil</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Australia</a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a className="nav-link" href="#">Brazil</a>
                </li>
              </ul>
            </div>
          </div>


          <div className="a_footer_bottom">A</div>
        </footer>
      </div>
    )
  }
}


App.propTypes = {}
export default App
