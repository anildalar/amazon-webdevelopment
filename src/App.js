import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser, faChevronRight,faBars } from '@fortawesome/free-solid-svg-icons'

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
    y: ''
  }
  //2. constructor
  constructor(props) {
    super(props);
  }

  //3.Method
  componentDidMount() {
    //this is the life cyle method that will be called when page is loaded successfully
    window.addEventListener('scroll',this.handleScroll);
  }
  handleScroll = ()=>{
    console.log('ok '+window.scrollY);
    if(window.scrollY >= 60){//if scroll amount is greater than 50 then we will 
        // Add 'position-fixed top-0 start-0'
      this.setState({y:'position-fixed top-0 start-0'});
    }else{
      // Remove 'position-fixed top-0 start-0'
      this.setState({y:''});
    }
  }
  closemodal = () => {
    this.setState({ x: 'l934' });
  }
  handleModal = () => {
    this.setState({ x: 'l433' })
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
        <header>
          <div className={'a_header_top p-1 w-100 '+this.state.y }>
            <button className="me-1 btn h-100" style={{ 'width': '10%' }}>
              <img className="img-fluid" src="./logo.png" />
            </button>
            <button className="lh-1 text-white fs-6 me-1 btn h-100" style={{ 'width': '10%' }}>
              Deliver to Anil
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="fw-bold d-block"><span className="a_city">Neemuch</span><span className="a_pincode">458441</span></span>
            </button>
            <form className="bg-white hform w-50 h-75 d-inline-block">C</form>
            <button className="btn h-100" style={{ 'width': '4%' }}>D</button>
            <button className="btn h-100" style={{ 'width': '8%' }}>E</button>
            <button className="btn h-100" style={{ 'width': '8%' }}>F</button>
            <button className="btn h-100" style={{ 'width': '8%' }}>G</button>
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
              <div className="col">

              </div>
              <div className="col">B</div>
              <div className="col">C</div>
              <div className="col">D</div>

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
        <footer></footer>
      </div>
    )
  }
}


App.propTypes = {}
export default App
