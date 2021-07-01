import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @class Detail
**/

class Detail extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <div className="a_main bg-white a_dtl_main mx-auto">
                    <div className="a_dtl_top_banner tbdr"></div>
                    <div className="row m-0 a_dtl_prodCont">
                        <div className="col-9 tbdr">A</div>
                        <div className="col-3 tbdr">B</div>
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
                                        <tr>
                                            <td className="w-25">
                                                <a href="#" className="btn btn-link ">5 start</a>
                                            </td>
                                            <td className="w-50">
                                                <div className="progress mb-3">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td class="w-25"><a href="#">100%</a></td>
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
                                            <td class="w-25"><a href="#">100%</a></td>
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
                                            <td class="w-25"><a href="#">100%</a></td>
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
                                            <td class="w-25"><a href="#">100%</a></td>
                                        </tr>
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