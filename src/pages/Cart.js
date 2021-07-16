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
                <div style={{ backgroundColor: '#eaeded !important' }}>
                    <div className="row m-0 tbdr w-100 cartHeader">
                        <div className="col-9 p-4 tbdr">
                            <div className="">
                                <h2 className="m-0">Shopping Cart</h2>
                                <a href="#">Deselect all items</a>
                                <div className="row m-0">
                                    <div className="col-3 tbdr d-flex align-items-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label className="form-check-label" for="flexCheckChecked"></label>
                                        </div>
                                        <a href="#">
                                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/61Iyd3w+bKL._AC_AA180_.jpg" />
                                        </a>
                                        </div>
                                        <div className="col-7 tbdr">
                                            <h5><a href="#">GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilizatio…</a></h5>
                                            <select className="">
                                                <option>Qty: 1 </option>
                                                <option>A</option>
                                                <option>A</option>
                                                <option>A</option>
                                            </select>
                                        </div>
                                        <div className="col-2 tbdr">C</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 tbdr">B</div>
                        </div>
                        <div className="container-fluid tbdr bg-danger cartFooter">A</div>
                    </div>

            </Layout>
                )
    }
}


                Cart.propTypes = { }
                export default Cart