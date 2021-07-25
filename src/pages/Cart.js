import React, { Component } from 'react'
import Layout from '../components/Layout'

//1. import { NamedImport } from 'somelibrary';
//2. import defaultImport from 'somelibrary';

import { Link } from 'react-router-dom';

/**
* @author
* @class Cart
**/

class Cart extends Component {
    //1. Property
    state = {}
    //2.Constructor

    //3. Method
    render() {
        return (
            <Layout>
                <div className=" cartContainer">
                    <div className="row m-0 p-3 tbdr w-100 cartHeader">
                        <div className="col-9 p-3">
                            <div className="d-block emptyCartLoggedInUser bg-white p-4 mb-3">
                                <h4 className="m-0">Your Amazon Cart is empty.</h4>
                                <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.Continue shopping on the <a href="#">Amazon.in homepage</a>, learn about <a href="#">today's deals</a>, or visit your <a href="#">Wish List</a>.</p>
                            </div>
                            <div className="d-block emptyCartGuestUser bg-white p-4 mb-3">
                                <div className="row m-0">
                                    <div className="col-4">
                                        <img className="img-fluid" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" />
                                    </div>
                                    <div className="col-8">
                                        <h4 className="m-0">Your Amazon Basket is empty</h4>
                                        <a href="#" className="btn btn-link p-0 text-decoration-none">Shop today’s deals</a>
                                        <div className="emptyCartGuestUserBtn">
                                            <button className="btn btn-sm btn-warning border rounded-3 me-3">Sign in to your account</button>
                                            <button className="btn btn-sm btn-light border rounded-3">Sign up now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block mb-3">
                                <div className="bg-white">
                                    <div className="cartContainercol9 p-3">
                                        <h4 className="m-0">Shopping Cart</h4>
                                        <a href="#">Deselect all items</a>
                                        <div className="row border-top border-bottom m-0">
                                            <div className="col-3 p-2 d-flex align-items-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                    <label className="form-check-label" for="flexCheckChecked"></label>
                                                </div>
                                                <a href="#">
                                                    <img className="img-fluid" src="https://m.media-amazon.com/images/I/61Iyd3w+bKL._AC_AA180_.jpg" />
                                                </a>
                                            </div>
                                            <div className="col-7 p-2">
                                                <h5 className="m-0">
                                                    <a href="#" className="text-decoration-none">GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilizatio…</a>
                                                </h5>
                                                <span className="d-inline-block text-success">In stock</span>
                                                <span className="d-inline-block text-danger">Only 2 left in stock.</span>
                                                <span className="d-block">Pattern name: Hero9</span>
                                                <ul className="nav">
                                                    <li className="nav-item">
                                                        <select className="d-block">
                                                            <option>Qty: 1 </option>
                                                            <option>A</option>
                                                            <option>A</option>
                                                            <option>A</option>
                                                        </select>
                                                    </li>
                                                    <li className="nav-item border-end">
                                                        <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">Delete</a>
                                                    </li>
                                                    <li className="nav-item border-end">
                                                        <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">Save for later</a>
                                                    </li>
                                                    <li className="nav-item ">
                                                        <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">See more link like this</a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-2 p-2 text-end">
                                                <span className="fw-bolder">$ 36,800.00</span>
                                            </div>
                                        </div>
                                        <div className="row border-top border-bottom m-0">
                                            <div className="col-3 p-2 d-flex align-items-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                    <label className="form-check-label"></label>
                                                </div>
                                                <a href="#">
                                                    <img className="img-fluid" src="https://m.media-amazon.com/images/I/61Iyd3w+bKL._AC_AA180_.jpg" />
                                                </a>
                                            </div>
                                            <div className="col-7 p-2">
                                                <h5 className="m-0">
                                                    <a href="#" className="text-decoration-none">GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilizatio…</a>
                                                </h5>
                                                <span className="d-inline-block text-success">In stock</span>
                                                <span className="d-inline-block text-danger">Only 2 left in stock.</span>
                                                <span className="d-block">Pattern name: Hero9</span>
                                                <ul className="nav">
                                                    <li className="nav-item">
                                                        <select className="d-block">
                                                            <option>Qty: 1 </option>
                                                            <option>A</option>
                                                            <option>A</option>
                                                            <option>A</option>
                                                        </select>
                                                    </li>
                                                    <li className="nav-item border-end">
                                                        <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">Delete</a>
                                                    </li>
                                                    <li className="nav-item border-end">
                                                        <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">Save for later</a>
                                                    </li>
                                                    <li className="nav-item ">
                                                        <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">See more link like this</a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-2 p-2 text-end">
                                                <span className="fw-bolder">$ 36,800.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cartTotal text-end">
                                        Subtotal (2 items):   <span className="fw-bold">67,799.00</span>
                                    </div>
                                </div>
                                <div className="bg-white p-3 mt-4 cartTabpane">
                                    <h4>Your Items</h4>
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a className="nav-link border-0" data-bs-toggle="tab" href="#noitemsavedforlater">No items saved for later</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active border-0" data-bs-toggle="tab" href="#buyitagain">Buy it again</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane container fade p-0" id="noitemsavedforlater"></div>
                                        <div className="tab-pane container active p-0" id="buyitagain">
                                            <div className="row pt-2 pb-2 border-top m-0">
                                                <div className="col-3 p-2">
                                                    <a href="#">
                                                        <img className="img-fluid" src="https://m.media-amazon.com/images/I/51rq4S57XyL._AC_AA180_.jpg" />
                                                    </a>
                                                </div>
                                                <div className="col-7 p-2">
                                                    <h5 className="m-0">
                                                        <a href="#" className="text-decoration-none">GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilizatio…</a>
                                                    </h5>
                                                    <span className="d-inline-block text-success">In stock</span>
                                                    <span className="d-inline-block text-danger">Only 2 left in stock.</span>
                                                    <span className="d-block">Pattern name: Hero9</span>
                                                    <ul className="nav">
                                                        <li className="nav-item">
                                                            <select className="d-block">
                                                                <option>Qty: 1 </option>
                                                                <option>A</option>
                                                                <option>A</option>
                                                                <option>A</option>
                                                            </select>
                                                        </li>
                                                        <li className="nav-item border-end">
                                                            <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">Delete</a>
                                                        </li>
                                                        <li className="nav-item border-end">
                                                            <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">Save for later</a>
                                                        </li>
                                                        <li className="nav-item ">
                                                            <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">See more link like this</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-2 p-2">
                                                    <span className="fw-bolder text-danger ">$ 36,800.00</span>
                                                </div>
                                            </div>
                                            <div className="row pt-2 pb-2 border-top m-0">
                                                <div className="col-3 p-2">
                                                    <a href="#">
                                                        <img className="img-fluid" src="https://m.media-amazon.com/images/I/51rq4S57XyL._AC_AA180_.jpg" />
                                                    </a>
                                                </div>
                                                <div className="col-7 p-2">
                                                    <h5 className="m-0">
                                                        <a href="#" className="text-decoration-none">GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilizatio…</a>
                                                    </h5>
                                                    <span className="d-inline-block text-success">In stock</span>
                                                    <span className="d-inline-block text-danger">Only 2 left in stock.</span>
                                                    <span className="d-block">Pattern name: Hero9</span>
                                                    <ul className="nav">
                                                        <li className="nav-item">
                                                            <select className="d-block">
                                                                <option>Qty: 1 </option>
                                                                <option>A</option>
                                                                <option>A</option>
                                                                <option>A</option>
                                                            </select>
                                                        </li>
                                                        <li className="nav-item border-end">
                                                            <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">Delete</a>
                                                        </li>
                                                        <li className="nav-item border-end">
                                                            <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">Save for later</a>
                                                        </li>
                                                        <li className="nav-item ">
                                                            <a className="nav-link btn-sm p-0 ps-2 pe-2" href="#">See more link like this</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-2 p-2">
                                                    <span className="fw-bolder text-danger ">$ 36,800.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3 p-3 tbdr">
                            <img className="img-fluid w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" />
                            <div className="proccedtoboy p-3 bg-white mt-3 mb-3">
                                <h5>Subtotal (1 item):   36,750.00</h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        This order contains a gift
                                    </label>
                                </div>
                                <Link to="/checkout" className="mb-3 mt-3 btn btn-warning btn-sm w-100">Procceed to Buy</Link>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item border rounded-0 ">
                                        <h2 className="accordion-header border-0" id="headingOne">
                                            <button className="accordion-button bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            EMI Available
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p> Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up). Learn more</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div className="more_itm_to_exp bg-white border rounded-3 p-3">
                                <h6>More items to explore</h6>
                                <div className="row m-0">
                                    <div className="col-5 p-0">
                                        <img className="img-fluid w-100" src="https://images-eu.ssl-images-amazon.com/images/I/61UXezWyusL._AC_UL100_SR100,76_.jpg" />
                                    </div>
                                    <div className="col-7 p-0">
                                        <a href="#">Vamsha-Nature-Care</a>
                                        <span className="text-danger d-block">₹198.00</span>
                                        <button className="btn amznBtn p-0 rounded-3">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid tbdr bg-danger cartFooter">A</div>
                </div>
            </Layout>
        )
    }
}


Cart.propTypes = {}
export default Cart