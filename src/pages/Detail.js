import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faStar, faUser } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @class Detail
**/

class Detail extends Component {
    //1. Property 
    state = {
        prodSrollFix: 'position-relative'
    }

    //2. Constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.detailHandleScroll)
    }

    detailHandleScroll = () => {
        console.log('detail ok ' + window.scrollY);
        if (window.scrollY < 90) {
            this.setState({ prodSrollFix: 'position-relative top-0' });
        } else if (window.scrollY >= 90 && window.scrollY <= 1200) {
            this.setState({ prodSrollFix: 'position-fixed top-0' });
        } else {
            this.setState({ prodSrollFix: 'position-relative t1225' })
        }
    }
    //3. Methods
    render() {
        return (
            <Layout>
                <div className="a_main bg-white a_dtl_main mx-auto">
                    <div className="a_dtl_top_banner tbdr"></div>
                    <div className="row m-0 a_dtl_prodCont">
                        <div className="col-9 p-0 tbdr">
                            <div className="row m-0 h-100">
                                <div className="col-1 p-0 tbdr">
                                    <ul className={'a_dtl_prodThumbnail nav flex-column mx-auto ' + this.state.prodSrollFix}>
                                        <li className="nav-item">
                                            <a className="nav-link p-0 mb-1 mt-1 border" href="#">
                                                <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/61pwrivrfUS._SL1500_.jpg" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-0 mb-1 mt-1 border" href="#">
                                                <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/61pwrivrfUS._SL1500_.jpg" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-0 mb-1 mt-1 border" href="#">
                                                <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/61pwrivrfUS._SL1500_.jpg" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-0 mb-1 mt-1 border" href="#">
                                                <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/61pwrivrfUS._SL1500_.jpg" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 p-0 tbdr">
                                    <div className={'bg-danger a_dtl_prodMainImg ' + this.state.prodSrollFix}>

                                    </div>

                                </div>
                                <div className="col-5 p-0 tbdr">
                                    <h4>Lenovo IdeaPad 3 (2021) | 11th Gen Intel Core i5 |15.6" Full HD Thin and Light Laptop | 4-Side Narrow Bezel (8GB/512GB SSD/Windows 10/MS Office 2019/Backlit Keyboard/Arctic Grey/1.65Kg), 82H8014BIN</h4>
                                    <a href="#" className="btn btn-link d-block text-start">Visit the Lenovo Store</a>
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <span className="ratingCount">4</span> Ratings
                                    <hr />
                                    <span className="d-block">M.R.P.:	<span className="text-decoration-line-through">₹ 79,890.00</span></span>
                                    <span className="d-block">Price:	<span className="text-danger">₹ 57,990.00</span></span>
                                    <span className="d-block">You Save:	<span className="text-danger">₹ 21,900.00 (27%)</span></span>
                                    <ul className="list-group">
                                        <li className="list-group-item">	Save Extra with 5 offers</li>
                                        <li className="list-group-item">No Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000 DetailsNo Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000 Details</li>
                                        <li className="list-group-item">Exchange Offer: Up to ₹ 16,300.00 off on Exchange</li>
                                        <li className="list-group-item">A fourth item</li>
                                        <li className="list-group-item">
                                            <a href="#">See 3 more</a>
                                        </li>
                                    </ul>
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"> 7 Days Replacement</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Amazon Delivered</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">1 Year Warranty</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">No-Contact Delivery</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-2 tbdr">
                            <form>
                                <div className="card">
                                    <div className="card-header">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                <span className="d-block text-dark">With Exchange</span>
                                                <span className="d-block text-danger">Up to $ 17,000 off</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                <span className="d-block text-dark">Without Exchange</span>
                                                <span className="d-block text-danger">₹ 50,000 <span className="text-dark text-decoration-line-through">₹ 80,000</span> </span>
                                            </label>
                                        </div>
                                        <div>
                                            <span className="d-inline-block">Quantity</span>
                                            <select className="d-inline-block form-select form-select-sm w-25" aria-label="Default select example">
                                                <option value="1" selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-warning" type="button">Add to cart</button>
                                            <button className="btn btn-warning a_buynow" type="button">Buy Now</button>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Add Gift Option
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <hr />
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <a href="#" className="border d-block mt-3 dtl_sponsordbox">
                                <div className="dtl_sponsordbox_imgcont overflow-hidden">
                                    <img className="img-thumbnail" width="330" src="https://images-na.ssl-images-amazon.com/images/I/61pwrivrfUS._SL1500_.jpg" />
                                </div>
                                <span className="float-end me-2">Sponsored <FontAwesomeIcon icon={faInfo} /></span>
                            </a>
                        </div>
                    </div>
                    <div className="a_dtl_prodContBottom tbdr border-top border-bottom mb-1"></div>
                    <div className="a_dtl_havQ tbdr border-top"></div>
                    <div className="a_dtl_prodRelItem tbdr border-top border-bottom">
                        <h5>Products related to this item</h5>
                    </div>
                    <div className="a_dtl_custAlsoRev tbdr border-top border-bottom">
                        <h5>Customers who viewed this item also viewed</h5>
                    </div>
                    <div className="a_dtl_prodInfo">
                        <div className="row">
                            <div className="col-6 border-top pt-3">
                                <h5 className="text-warning">Product information</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="table-light w-50" scope="col">#</th>
                                            <th scope="col">First</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="table-light w-50" scope="row">1</th>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th className="table-light w-50" scope="row">2</th>
                                            <td>Jacob</td>
                                        </tr>
                                        <tr>
                                            <th className="table-light w-50" scope="row">3</th>
                                            <td>Larry the Bird</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-6 border-top pt-3">
                                <h5 className="text-warning">Product information</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="table-light w-50" scope="col">#</th>
                                            <th scope="col">First</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="table-light w-50" scope="row">1</th>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th className="table-light w-50" scope="row">2</th>
                                            <td>Jacob</td>
                                        </tr>
                                        <tr>
                                            <th className="table-light w-50" scope="row">3</th>
                                            <td>Larry the Bird</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="a_dtl_custQnA tbdr">
                        <h5>Customer questions &amp; answers</h5>
                        <form>
                            <input placeholder="Have a question? Search for answers" className="form-control form-control-sm w-50" />
                        </form>
                        <table className="">
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="a_dtl_custReview tbdr">
                        <div className="row m-0 h-100">
                            <div className="col-3 tbdr">
                                <div className="a_dtl_custReview_aside tbdr">
                                    <h5>Customer Reviews</h5>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td className="w-25">
                                                    <a href="#" className="btn btn-link ">5 start</a>
                                                </td>
                                                <td className="w-50">
                                                    <div className="progress mb-3">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td className="w-25"><a href="#">100%</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="btn btn-link">4 start</a>
                                                </td>
                                                <td className="w-50">
                                                    <div className="progress mb-3">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td className="w-25"><a href="#">100%</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="btn btn-link">3 start</a>
                                                </td>
                                                <td className="w-50">
                                                    <div className="progress mb-3">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td className="w-25"><a href="#">100%</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="btn btn-link">2 start</a>
                                                </td>
                                                <td className="w-50">
                                                    <div className="progress mb-3">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td className="w-25"><a href="#">100%</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-9 tbdr">
                                <h4>Reviews With Images</h4>
                                <div className="reviews_with_img tbdr"></div>
                                <h4>Top Reviews from india</h4>
                                <div className="a_individual_comment mt-3 tbdr">
                                    <div>
                                        <FontAwesomeIcon icon={faUser} /> <span className="userName">Vinod Kumar</span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />

                                        <a href="#" className="text-dark "> Elegant Design with Superb Features</a>
                                    </div>
                                    <span className="text-secondary d-block">Reviewed in India on 16 May 2021</span>
                                    <span className="text-warning d-block">Verified Purchase</span>
                                    <p>Super sleek, luxurious, beautiful and features enriched! I am quite happy with its performance and its a genuine product of LENOVO. You can register it online. It comes with Windows 10 Home edition which gets activated with simple steps. No need to get any initial setup service, as Cortana helps you there. The camera is upto the mark. I was expecting a little better there, but it’s satisfactory. Sound and Picture quality are superb (better than HP in this range). Packaging was sturdy and reliable.
                                        Super sleek, luxurious, beautiful and features enriched! I am quite happy with its performance and its a genuine product of LENOVO. You can register it online. It comes with Windows 10 Home edition which gets activated with simple steps. No need to get any initial setup service, as Cortana helps you there. The camera is upto the mark. I was expecting a little better there, but it’s satisfactory. Sound and Picture quality are superb (better than HP in this range). Packaging was sturdy and reliable.
                                        Super sleek, luxurious, beautiful and features enriched! I am quite happy with its performance and its a genuine product of LENOVO. You can register it online. It comes with Windows 10 Home edition which gets activated with simple steps. No need to get any initial setup service, as Cortana helps you there. The camera is upto the mark. I was expecting a little better there, but it’s satisfactory. Sound and Picture quality are superb (better than HP in this range). Packaging was sturdy and reliable.
                                        Super sleek, luxurious, beautiful and features enriched! I am quite happy with its performance and its a genuine product of LENOVO. You can register it online. It comes with Windows 10 Home edition which gets activated with simple steps. No need to get any initial setup service, as Cortana helps you there. The camera is upto the mark. I was expecting a little better there, but it’s satisfactory. Sound and Picture quality are superb (better than HP in this range). Packaging was sturdy and reliable.

                                    </p>
                                    <span className="text-dark d-block">7 people found this helpful</span>
                                    <div>
                                        <button className="btn btn-light border">Helpfull</button>
                                        <button className="btn ">Report Abuse</button>
                                    </div>

                                </div>
                                <div className="a_individual_comment mt-3 tbdr">
                                    <div>
                                        <FontAwesomeIcon icon={faUser} /> <span className="userName">Vinod Kumar</span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />

                                        <a href="#" className="text-dark "> Elegant Design with Superb Features</a>
                                    </div>
                                    <span className="text-secondary d-block">Reviewed in India on 16 May 2021</span>
                                    <span className="text-warning d-block">Verified Purchase</span>
                                    <p>Super sleek, luxurious, beautiful and features enriched! I am quite happy with its performance and its a genuine product of LENOVO. You can register it online. It comes with Windows 10 Home edition which gets activated with simple steps. No need to get any initial setup service, as Cortana helps you there. The camera is upto the mark. I was expecting a little better there, but it’s satisfactory. Sound and Picture quality are superb (better than HP in this range). Packaging was sturdy and reliable.
                                        Super sleek, luxurious, beautiful and features enriched! I am quite happy with its performance and its a genuine product of LENOVO. You can register it online. It comes with Windows 10 Home edition which gets activated with simple steps. No need to get any initial setup service, as Cortana helps you there. The camera is upto the mark. I was expecting a little better there, but it’s satisfactory. Sound and Picture quality are superb (better than HP in this range). Packaging was sturdy and reliable.
                                        Super sleek, luxurious, beautiful and features enriched! I am quite happy with its performance and its a genuine product of LENOVO. You can register it online. It comes with Windows 10 Home edition which gets activated with simple steps. No need to get any initial setup service, as Cortana helps you there. The camera is upto the mark. I was expecting a little better there, but it’s satisfactory. Sound and Picture quality are superb (better than HP in this range). Packaging was sturdy and reliable.
                                        Super sleek, luxurious, beautiful and features enriched! I am quite happy with its performance and its a genuine product of LENOVO. You can register it online. It comes with Windows 10 Home edition which gets activated with simple steps. No need to get any initial setup service, as Cortana helps you there. The camera is upto the mark. I was expecting a little better there, but it’s satisfactory. Sound and Picture quality are superb (better than HP in this range). Packaging was sturdy and reliable.

                                    </p>
                                    <span className="text-dark d-block">7 people found this helpful</span>
                                    <div>
                                        <button className="btn btn-light border">Helpfull</button>
                                        <button className="btn ">Report Abuse</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}


Detail.propTypes = {}
export default Detail