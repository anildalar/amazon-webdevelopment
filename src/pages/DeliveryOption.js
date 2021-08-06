import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
/**
* @author
* @class DeliveryOption
**/

class DeliveryOption extends Component {
    //1.property
    state = {}
    styl = `
    .a_font_size{
        font-size: 14px
        
    }
 .amznbtn{
            background-image: -webkit-linear-gradient(top ,#ffffcc 0% , #ffcc99 10%,#ffcc66 50%);
           }
           .a_anch_dec a:hover{
            color:#C7511F !important;
            text-decoration:underline !important;
          }
    `
    //2 constructor

    //3 method
    render() {
        return (
            <>
                <style>
                    {this.styl}
                </style>
                <div className="delioptioncon ">
                    <div className="container ">
                        <div className=" del_header border-bottom">
                            <img className="mt-5 mb-5" src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif" />
                            <div className="row mt-3 mb-5 m-0">
                                <div className="col-9  ">
                                    <h3>Choose your delivery options</h3>
                                </div>
                                <div className="col-3  p-0">
                                    <Link to="/paymentmethod" className="btn border  btn-light border w-100">
                                        <button className="btn mt-1 w-100 btn-sm border amznbtn" >Continue</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className=" delioptio_main_con border-bottom">
                            <div className="row mt-2 m-0">
                                <div className="col  a_anch_dec ">
                                    <h5 className="fw-bold">Shipment 1 of 1</h5>
                                    <span className="fw-bold">Shipping from Amazon </span>
                                    <img src="https://images-na.ssl-images-amazon.com/images/G/31/marketing/fba/fba-badge_18px._V384100965_.png" />
                                    <a href="#" className=" ">(learn more)</a>
                                    <div className="a_font_size ">
                                        <span className="d-block mt-2 mb-2">Deliver to: Antim songara, 41, pragati nagar, NEEMUCH, MADHYA PRADESH, 458441 India</span>
                                        <div className="ms-2">
                                            <span className="fw-bold">Dell Vostro 3400 14" FHD Display Laptop (I5-1135G7 / 8GB / 512GB SSD / NVIDIA MX330 2GB Graphics / Win 10 + MSO / Backlit KB / Dune Color ) D552172WIN9DE</span>
                                            <span className="d-block"> <span className="text-decoration-line-through">₹67,240.00</span>  <span className="text-warning">₹59,490.00 </span>- Quantity: 1</span>
                                            <spna>Sold by: Appario Retail Private Ltd</spna>
                                        </div>
                                        <a href="#" className=" mt-2 mb-2 d-block text-decoration-none">Change quantities or delete</a>
                                    </div>
                                </div>
                                <div className="col ps-3">
                                    <h5 className="fw-bold" >Choose a delivery speed</h5>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            <span className="text-success">wednesday</span> - Free Free delivery and eligible order
                                        </label>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="a_font_size deli_footer mt-2">
                            <div className="   d-flex justify-content-center a_anch_dec">
                                <a href="#" className="border-end pe-1 text-decoration-none ">Conditions of Use </a>
                                <a href="#" className="ps-1 text-decoration-none"> Privacy Notice </a>
                                <span>© 2012-2020, Amazon.com, Inc. and its affiliates</span>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


DeliveryOption.propTypes = {}
export default DeliveryOption