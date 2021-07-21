import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

/**
* @author
* @class OrderHistroy
**/

class OrderHistroy extends Component {
    //1. Property
    state = {}

    //2. Constructor


    //3. Method
    render() {
        return (
            <Layout>
                <div className="a_odr_his_main bg-white tbdr">
                    <div className="container tbdr ps-5 pe-5" style={{ height: '400px' }}>
                        <nav className="a_ordhis_breadcrumb mt-2" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Your Account</a></li>
                                <li className="breadcrumb-item active text-warning" aria-current="page">Your Orders</li>
                            </ol>
                        </nav>
                        <div className="row m-0">
                            <div className="col p-0">
                                <h3>Your Orders</h3>
                            </div>
                            <div className="col p-0">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-7 tbdr border">
                                            <input type="text" className="form-control form-control-sm border-0" placeholder="Search all orders" />
                                        </div>
                                        <div className="col-sm">
                                            <input type="submit" className="btn btn-dark btn-sm w-100" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active border-0" data-bs-toggle="tab" href="#orders">Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link border-0" data-bs-toggle="tab" href="#buyagain">Buy Again</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link border-0" data-bs-toggle="tab" href="#cancelledorder">Cancelled Order</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane container active" id="orders">

                                    <div className="card">
                                        <div className="card-header">
                                            <div className="row m-0">
                                                <div className="col-1 p-0">
                                                    A
                                                </div>
                                                <div className="col-1 p-0">
                                                    B
                                                </div>
                                                <div className="col-1 p-0">
                                                    C
                                                </div>
                                                <div className="col-5 p-0">
                                                    
                                                </div>
                                                <div className="col-4 p-0">
                                                    D
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="buyagain">B</div>
                                <div className="tab-pane container fade" id="cancelledorder">C</div>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        )
    }
}


OrderHistroy.propTypes = {}
export default OrderHistroy