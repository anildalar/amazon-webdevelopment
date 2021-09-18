import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'react-bootstrap'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'

/**
* @author
* @class Home
**/

class Home extends Component {
    state = {}
    sty = `
    .p_mainbox1{
        height:98%;
        width:98%;
        background:#fff;
        }
    .p_mainbox1_inner >div{
        height:90%;
      }
      .p_mainbox1_inner .col-6{
        height:140px ;
       
        }
        .p_mainbox1_inner .row a{
          font-size: 12px;
        }
      
      .p_mainbox1_inner a{
        text-decoration: none;
        
      }
    `




    render() {
        return (
            <Layout>
                <style>
                    {this.sty}
                </style>
                <div className="a_main position-relative">
                    <div className="a_main1 a_main_top">
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
                                <div className="OLay w-100 h-100 position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block"
                                    src="./images/slider/2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="OLay w-100 h-100 position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block"
                                    src="./images/slider/3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="OLay w-100 h-100 position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block"
                                    src="./images/slider/4.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="OLay w-100 h-100 position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block"
                                    src="./images/slider/5.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="OLay w-100 h-100 position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block"
                                    src="./images/slider/6.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="OLay w-100 h-100 position-absolute top-0 start-0"></div>
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
                                                <h4 className="m-0">Hi, <span className="custName">Sunil</span></h4>
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
                                                </div>a
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
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>Automotive essentials | Up to 60% off</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" />
                                                        Cleaning essentials
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" />
                                                        Tyre &amp; rim care
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" />
                                                        Helmets
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" />
                                                        Veccum cleaner
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>Upgrade your home | Amazon Brands &amp; more</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_186x116-product-badge-4qqt8_186x116_in-en._SY116_CB663888093_.jpg" />
                                                        Smart LED Tv's
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_la_186x116_186x116_in-en._SY116_CB663888095_.jpg" />
                                                        Appliences
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_furn_186x116_372x232_in-en._SY116_CB663888090_.jpg" />
                                                        Furniture
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_kitchen_186x116_186x116_in-en._SY116_CB663888093_.jpg" />
                                                        Kitchen Products
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-12 p-3 mt-2 bg-white mb-4" style={{ 'height': 150 + 'px' }}>
                                        <h4 className="mb-3">Sign in for your best experience</h4>
                                        <button className="btn btn-warning btn-sm w-100 border border-secondary rounded-1">Sign in securely</button>
                                    </div>
                                    < div className="col-12 p-0  bg-white " style={{ 'height': 230 + 'px' }}>
                                        <img className="img-fluid h-100 w-100" src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="a_main_bottom_2 row m-0 mb-3">

                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>Top rated, premium quality | Amazon Brands &amp; more</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg" />
                                                        Home Products
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg" />
                                                        Furniture
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg" />
                                                        Dailt essentials
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg" />
                                                        Clothing essentials
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>Styles for Men | Up to 70% off</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/1-min._SY116_CB666463598_.jpg" />
                                                        Clothing
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg" />
                                                        Footwear
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/4-min._SY116_CB666463598_.jpg" />
                                                        Watches
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/3-min._SY116_CB666463598_.jpg" />
                                                        Bags &amp; Luggage
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>Cookware &amp; dining</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg" />
                                                        Gas Stoves
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg" />
                                                        CookWare
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg" />
                                                        Kitchen Storage
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg" />
                                                        TableWare
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner h-100 ">
                                        <div className="  w-100">
                                            <h5>Up to 45% off | Bedding &amp; linen | Amazon Brands </h5>
                                            <img className="img-fluid h-75 w-100 " src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg" />
                                        </div>
                                        <a href="#" className="btn btn-link">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="a_main_bottom_3 p-3 bg-white mb-5">
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
                        <div className="a_main_bottom_4 overflow-hidden p-3 bg-success mb-3">
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
                        <div className="a_main_bottom_1 row m-0 mb-3">

                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>Gift a smile to your baby</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Soft_toys._SY116_CB667648551_.jpg" />
                                                        Soft Toys
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Sound_toys._SY116_CB667648551_.jpg" />
                                                        Sound Toys
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Rattles._SY116_CB667648551_.jpg" />
                                                        Rattles
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Sorting_toys._SY116_CB667648551_.jpg" />
                                                        Sorting toys
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner h-100 ">
                                        <div className="  w-100">
                                            <h5>Rakhi Store | One stop shop for Gifting  </h5>
                                            <img className="img-fluid h-75 w-100 " src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Rakhi21/GW/PC_CC1_1x._SY304_CB663387509_.jpg" />
                                        </div>
                                        <a href="#" className="btn btn-link">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>Make your parenting journey easier</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Prenatal_essentials._SY116_CB667655033_.jpg" />
                                                        Prenatal essentials
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/0-2_years_baby_essentials._SY116_CB667655033_.jpg" />
                                                        0-2 years baby essentials
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/2-4_years_baby_essentials._SY116_CB667655033_.jpg" />
                                                        2-4 years baby essentials
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Explore_more._SY116_CB667655033_.jpg" />
                                                        Explore more
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner h-100 ">
                                        <div className="  w-100">
                                            <h5>Effective dishwashing for Indian cooking</h5>
                                            <img className="img-fluid h-75 w-100 " src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/DW_CC_-_March_379x304._SY304_CB655397356_.jpg" />
                                        </div>
                                        <a href="#" className="btn btn-link">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" tbdr a_main_bottom_4 mb-3"></div>
                        <div className=" tbdr a_main_bottom_4 mb-3"></div>
                        <div className=" tbdr a_main_bottom_4 mb-3"></div>
                        <div className="a_main_bottom_1 row m-0 mb-3">

                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>For your little one | Amazon Brands &amp; more</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/QC/PC/Rccar_186x116._SY116_CB654408186_.jpg" />
                                                        Remote control cars &amp; more
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/QC/PC/Softtoys_186x116._SY116_CB654408186_.png" />
                                                        Soft toys
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/QC/PC/Puzzles_186x116._SY116_CB654408314_.jpg" />
                                                        Puzzles &amp; educational toys
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/QC/PC/BabyToys_PC_186x116._SY116_CB654408314_.jpg" />
                                                        Baby Products
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>Make your Rakhi gifting memorable</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Rakhi21/GW/Smartphones._SY116_CB663361438_.jpg" />
                                                        Smart phones
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Rakhi21/GW/Alexa_devices._SY116_CB663361433_.jpg" />
                                                        Alexa devices
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Rakhi21/GW/Electronics._SY116_CB663361433_.jpg" />
                                                        Electronics
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Rakhi21/GW/Explore_more._SY116_CB663361438_.jpg" />
                                                        Explore more
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>

                                </div>
                            </div>

                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner h-100 ">

                                        <h5>Just Ask Alexa </h5>
                                        <img className="img-fluid h-75 w-100 " src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/CC_Echo-dot_1x._SY304_CB445355234_.jpg" />

                                        <a href="#" className="btn btn-link">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>Food, fitness and WFH essentials | Amazon</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/10.Granola-bars_186x116._SY116_CB668532477_.jpg" />
                                                        breakfast essentials
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/2.WFH-essentials_186x116._SY116_CB668532477_.jpg" />
                                                        WFH essential
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/21.Protein-supplements_186x116._SY116_CB668532477_.jpg" />
                                                        Protin supplements
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/22.Fitness-essentials1_186x116._SY116_CB668532477_.jpg" />
                                                        Fitness essential
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" tbdr a_main_bottom_4 mb-3"></div>
                        <div className=" tbdr a_main_bottom_4 mb-3"></div>
                        <div className="a_main_bottom_1 row m-0 mb-3">
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner h-100 ">

                                        <h5>For all your photography needs </h5>
                                        <img className="img-fluid h-75 w-100 " src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Cameras/MSOs/July/Pc_Card/379x304_pc_card_2._SY304_CB664252703_.jpg" />

                                        <a href="#" className="btn btn-link">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5>At home Grooming &amp; Wellness devices</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/2_1x._SY116_CB664832134_.jpg" />
                                                        Men's Grooming
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/3_1x._SY116_CB664832134_.jpg" />
                                                        Women's Grooming
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/4_1x._SY116_CB664832134_.jpg" />
                                                        Healthcare Devices
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/1_1x._SY116_CB664832134_.jpg" />
                                                        Massagers
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner w-100 h-100 ">
                                        <div className=" w-100 ">
                                            <h5> Trending picks | Amazon Brands &amp; more</h5>
                                            <div className="row m-0 ">
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/1_186x116._SY116_CB433910794_.jpg" />
                                                        fans ACs &amp; coolers
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/3-1-Summer_QC_186x116._SY116_CB429097342_.jpg" />
                                                        Towels
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 pe-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2_186x116._SY116_CB667536804_.jpg" />
                                                        Water bottles
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0 ">
                                                    <a href="#" className="text-start p-0 rounded-0 btn  w-100 h-100">
                                                        <img className="img-fluid h-75 ps-1" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/inbaugwsummerpc/xcm_banners_bau_2021_desktop-quadcard-186x116-product-badge-s46op_186x116_in-en._SY116_CB667537191_.jpg" />
                                                        Light blocking curtains
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-link text-decoration-none">See More</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="p_mainbox1 p-3">
                                    <div className="p_mainbox1_inner h-100 ">

                                        <h5>Fire TV Stick Lite</h5>
                                        <img className="img-fluid h-75 w-100 " src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/SMPmso/MSO_CC-_Sheldon._SY304_CB657532823_.jpg" />

                                        <a href="#" className="btn btn-link">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Layout >
        )
    }
}


Home.propTypes = {}
export default Home