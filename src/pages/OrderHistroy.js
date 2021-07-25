import React, { Component } from 'react'
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
                    <div className="container ps-5 pe-5" style={{ height: '400px' }}>
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
                            <ul className="nav nav-tabs cartTabpane">
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
                                    <div className="mt-3 mb-3">
                                        <strong><span className="orderCount">0</span> orders</strong> placed in
                                        <select className="ms-2 bgLight form-select form-select-sm d-inline-block w-25" aria-label="Default select example">
                                            <option selected>Pass 3 months</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <p className="text-center m-5 d-none">You have not placed any orders in past 3 months. <a href="#">View orders in <span className="year">2021</span></a></p>
                                    </div>
                                    <div className="card d-block">
                                        <div className="card-header">
                                            <div className="row m-0">
                                                <div className="col-2 p-0">
                                                    <span className="d-block">ORDER PLACED</span>
                                                    6 February 2021
                                                </div>
                                                <div className="col-1 p-0">
                                                    <span className="d-block">TOTAL</span>
                                                    339.00
                                                </div>
                                                <div className="col-1 p-0">
                                                    <span className="d-block">SHIP TO</span>
                                                    Anil
                                                </div>
                                                <div className="col-4 p-0">

                                                </div>
                                                <div className="col-4 p-0">
                                                    <span className="d-block">ORDER # 402-0006108-8031576</span>
                                                    <a href="#" className="btn btn-sm btn-link border-end">View order details</a><a href="#" className="btn btn-sm btn-link">  Invoice </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="fw-bold m-0">Refunded</h5>
                                            <p>Your return is in transit. Your refund has been issued. <button type="button" class="btn btn-link btn-sm" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">When will I get my refund?</button> </p>
                                            <div className="row m-0">
                                                <div className="col-1 p-0">
                                                    <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/I/51b%2BmjMompL._SY90_.jpg" />
                                                </div>
                                                <div className="col-8 p-2">
                                                    <a href="#">ShopAIS Latest LCD Writing Tablet, 8.5-inch Writing Board Doodle Board Drawing Pad with Newest LCD Pressure-Sensitive Technology, Gifts for Kids &amp; Adults</a>
                                                </div>
                                                <div className="col-3 p-0">
                                                    <div class="d-grid gap-1">
                                                        <button class="btn amznBtn btn-sm border" type="button">View Return/Refund Status</button>
                                                        <button class="btn bgLight btn-sm border" type="button">Archive Orders</button>
                                                    </div>
                                                </div>
                                            </div>
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