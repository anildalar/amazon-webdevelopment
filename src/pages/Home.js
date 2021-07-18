import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'react-bootstrap'
import { faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'

/**
* @author
* @class Home
**/

class Home extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <div className="a_main position-relative">
                    <div className=" a_main1 a_main_top">
                        <Carousel>
                            <Carousel.Item>
                                <div className="OLay w-100 h-100 position-absolute top-0 start-0"></div>                               
                                <img
                                    className="d-block"
                                    src="./images/slider/1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>                                
                                <img
                                    className="d-block"
                                    src="./images/slider/2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src="./images/slider/3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>                                
                                <img
                                    className="d-block"
                                    src="./images/slider/4.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>                                
                                <img
                                    className="d-block"
                                    src="./images/slider/5.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>                                
                                <img
                                    className="d-block"
                                    src="./images/slider/6.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src="./images/slider/7.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className=" ml-1 position-absolute a_main_bottom">
                        <div className="a_main_bottom_1 row m-0 mb-3">
                            <div className="col p-2">
                                <div className="a_mainbox1 p-3">
                                    {/* Start - Only when user is logged in */}
                                    <div className="a_mainbox1_inner w-100 h-100">
                                        <div className="row m-0" style={{ height: '65px' }}>
                                            <div className="col-4">
                                                <FontAwesomeIcon style={{ fontSize: '3em', 'color': '#aab7b7' }} icon={faUserCircle} />
                                            </div>
                                            <div className="col-8">
                                                <h4 className="m-0">Hi, <span className="custName">Anil</span></h4>
                                                <span style={{ fontSize: '12px' }}>Customer since 2017</span>
                                            </div>
                                        </div>
                                        <p>Top links for you</p>
                                        <div className="row m-0 a_toplinks">
                                            <div className="col-6 p-0">
                                                <a href="#" className="btn rounded-0 w-100 h-100">
                                                    <img className="img-fluid" src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png" />
                                                    <p>Your Orders</p>
                                                </a>
                                            </div>
                                            <div className="col-6 p-0">
                                                <a href="#" className="btn rounded-0 w-100 h-100">
                                                    <img className="img-fluid" src="https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/976419031._AC_SR120,80_.png" />
                                                    <p>Mobiles &amp; Associeries</p>
                                                </a>
                                            </div>
                                            <div className="col-6 p-0">
                                                <a href="#" className="btn rounded-0 w-100 h-100">
                                                    <img className="img-fluid" src="https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/6648217031._AC_SR120,80_.png" />
                                                    <p>Fashion</p>
                                                </a>
                                            </div>
                                            <div className="col-6 p-0">
                                                <a href="#" className="btn rounded-0 w-100 h-100">
                                                    <img className="img-fluid" src="https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/2454178031._AC_SR120,80_.png" />
                                                    <p>Grocery</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End - Only when user is logged in */}

                                    {/* Start - Only when user is not logged in */}
                                    <div className="a_mainbox1_inner w-100 h-100 bg-danger d-none">
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
                                    {/* End - Only when user is not logged in */}
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="a_mainbox1 p-3">
                                    <div className="a_mainbox1_inner w-100 h-100 bg-danger">
                                        <div className=" w-100 bg-warning">



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
                            <div className="col">
                                <div className="row">
                                    <div className="col-12 p-3 bg-white mb-4" style={{ 'height': 150 + 'px' }}>
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
                            <div className="col-6">
                                A
                            </div>
                            <div className="col-3">B</div>
                            <div className="col-3">C</div>
                        </div>
                        <div className="a_main_bottom_3 p-3 bg-white">
                            <div className="mb-5">
                                <h3 className="float-start">Today's Deals</h3>
                                <button type="button" className="float-start btn btn-link text-decoration-none">see all deals</button>
                            </div>
                            <Carousel className="carouselExampleControls2">
                                <Carousel.Item>
                                    <div className="imgCont row">
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/31oTI44Ja3S.__AC_SY200_.jpg" />
                                            </div>
                                            <span className="d-block">  <span className="minPrice fw-bold">₹ 349.00</span> - ₹ <span className="maxPrice fw-bold">5,499.00</span></span>
                                            <span className="d-block">Ends in 15:06:55</span>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/41r9gQgxJOS.__AC_SY200_.jpg" />
                                            </div>
                                            <span className="d-block">  <span className="minPrice fw-bold">₹ 349.00</span> - ₹ <span className="maxPrice fw-bold">5,499.00</span></span>
                                            <span className="d-block">Ends in 15:06:55</span>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/31qg4tENPTL.__AC_SY200_.jpg" />
                                            </div>
                                            <span className="d-block">  <span className="minPrice fw-bold">₹ 349.00</span> - ₹ <span className="maxPrice fw-bold">5,499.00</span></span>
                                            <span className="d-block">Ends in 15:06:55</span>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/51ivRBHcH6L.__AC_SY200_.jpg" />
                                            </div>
                                            <span className="d-block">  <span className="minPrice fw-bold">₹ 349.00</span> - ₹ <span className="maxPrice fw-bold">5,499.00</span></span>
                                            <span className="d-block">Ends in 15:06:55</span>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/31oTI44Ja3S.__AC_SY200_.jpg" />
                                            </div>
                                            <span className="d-block">  <span className="minPrice fw-bold">₹ 349.00</span> - ₹ <span className="maxPrice fw-bold">5,499.00</span></span>
                                            <span className="d-block">Ends in 15:06:55</span>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/31oTI44Ja3S.__AC_SY200_.jpg" />
                                            </div>
                                            <span className="d-block">  <span className="minPrice fw-bold">₹ 349.00</span> - ₹ <span className="maxPrice fw-bold">5,499.00</span></span>
                                            <span className="d-block">Ends in 15:06:55</span>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="imgCont row">
                                        <div className="col">7</div>
                                        <div className="col">8</div>
                                        <div className="col">9</div>
                                        <div className="col">10</div>
                                        <div className="col">11</div>
                                        <div className="col">12</div>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="imgCont row">
                                        <div className="col">13</div>
                                        <div className="col">14</div>
                                        <div className="col">15</div>
                                        <div className="col">16</div>
                                        <div className="col">17</div>
                                        <div className="col">18</div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="a_main_bottom_4 overflow-hidden p-3 bg-success">
                            <div className="mb-5">
                                <h3 className="float-start">Best Sellers in Computers &amp; Accessories</h3>
                            </div>
                            <Carousel className="carouselExampleControls2 carouselExampleControls3">
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75 bg-danger">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/31oTI44Ja3S.__AC_SY200_.jpg" />
                                            </div>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75 bg-danger">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/41r9gQgxJOS.__AC_SY200_.jpg" />
                                            </div>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75 bg-danger">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/31qg4tENPTL.__AC_SY200_.jpg" />
                                            </div>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75 bg-danger">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/51ivRBHcH6L.__AC_SY200_.jpg" />
                                            </div>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75 bg-danger">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/31oTI44Ja3S.__AC_SY200_.jpg" />
                                            </div>
                                        </div>
                                        <div className="col p-0 text-center">
                                            <div className="imgPlace h-75 bg-danger">
                                                <img className="img-fluid" src="https://m.media-amazon.com/images/I/31oTI44Ja3S.__AC_SY200_.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="imgCont row">
                                        <div className="col">7</div>
                                        <div className="col">8</div>
                                        <div className="col">9</div>
                                        <div className="col">10</div>
                                        <div className="col">11</div>
                                        <div className="col">12</div>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="imgCont row">
                                        <div className="col">13</div>
                                        <div className="col">14</div>
                                        <div className="col">15</div>
                                        <div className="col">16</div>
                                        <div className="col">17</div>
                                        <div className="col">18</div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>

                </div>
            </Layout>
        )
    }
}


Home.propTypes = {}
export default Home