import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Delivery
**/

class Delivery extends Component {
    //1. Property
    state = {}

    //2. Constructor
    constructor(props) {
        super(props);
    }

    //3. Method
    render() {
        return (
            <React.Fragment>
                <div className="container p-0 delivery">
                    <header className="d-flex align-items-center">
                       <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-items-banner._CB485947700_.gif" />
                    </header>
                    <div className="a_del_main">
                        <div className="row m-0">
                            <div className="col-6">
                                <form>
                                    <h4>Add a new address</h4>
                                    <div class="mb-3">
                                        <label for="fullname" class="form-label">Full name</label>
                                        <input type="text" class="form-control form-control-sm" id="fullname" placeholder="" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="mobno" class="form-label">Mobile number</label>
                                        <input type="text" class="form-control form-control-sm" id="mobno" placeholder="" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="pincode" class="form-label">Pincode</label>
                                        <input type="text" class="form-control form-control-sm" id="pincode" placeholder="" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="flatbuild" class="form-label">Flat, House no., Building, Company, Apartment</label>
                                        <input type="text" class="form-control form-control-sm" id="flatbuild" placeholder="" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="areastreet" class="form-label">Area, Street, Sector, Village</label>
                                        <input type="text" class="form-control form-control-sm" id="areastreet" placeholder="" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="landmark" class="form-label">Landmark</label>
                                        <input type="text" class="form-control form-control-sm" id="landmark" placeholder="E.g near apollo hospital" />
                                    </div>
                                    <div className="row m-0">
                                        <div className="col ps-0">
                                            <div class="mb-3">
                                                <label for="towncity" class="form-label">Town/City</label>
                                                <input type="text" class="form-control form-control-sm" id="towncity" placeholder="E.g near apollo hospital" />
                                            </div>
                                        </div>
                                        <div className="col pe-0">
                                            <div class="mb-3">
                                                <label for="towncity" class="form-label">State</label>
                                                <select class="form-select form-select-sm" aria-label="Default select example">
                                                    <option selected>Choose a state</option>
                                                    <option value="mp">MP</option>
                                                    <option value="mp">MP</option>
                                                    <option value="mp">MP</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Make this my default address
                                        </label>
                                    </div>
                                    <h4>Add delivery instructions</h4>
                                    <p> aksjdhfkas ddfkjha ksdfh aksdh fkahs</p>
                                    <div class="mb-3">
                                        <label for="towncity" class="form-label">Address Type</label>
                                        <select class="form-select form-select-sm" aria-label="Default select example">
                                            <option selected>Select an Address Type</option>
                                            <option value="mp">MP</option>
                                            <option value="mp">MP</option>
                                            <option value="mp">MP</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-sm amznBtn">Use this address</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <footer className="">
                        <ul className="nav justify-content-center mt-4">
                            <li className="nav-item">
                                <a className="nav-link p-1" href="#">Conditions of Use </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-1" href="#"> Privacy Notice </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-1" href="#">Help </a>
                            </li>
                        </ul>
                        <span className="d-block text-center">© 1996-2021, Amazon.com, Inc. or its affiliates</span>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}


Delivery.propTypes = {}
export default Delivery