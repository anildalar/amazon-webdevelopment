import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

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
                        <div className="col-9 p-3 bg-white">
                            <div className="cartContainercol9 p-3">
                                <h2 className="m-0">Shopping Cart</h2>
                                <a href="#">Deselect all items</a>
                                <div className="row border-top border-bottom m-0">
                                    <div className="col-3 p-2 d-flex align-items-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
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
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
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
                            </div>
                            <div className="cartTotal text-end">
                                Subtotal (2 items):   <span className="fw-bold">67,799.00</span>
                            </div>
                        </div>
                        <div className="col-3 p-2 tbdr">B</div>
                    </div>
                    <div className="container-fluid tbdr bg-danger cartFooter">A</div>
                </div>
            </Layout>
        )
    }
}


Cart.propTypes = {}
export default Cart