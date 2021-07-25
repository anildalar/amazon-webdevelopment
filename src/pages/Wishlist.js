import React, { Component } from 'react'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @class Wishlist
**/

class Wishlist extends Component {
    //1. Property
    state = {
        border: ''
    }

    //2. Constructor

    //3. Method
    ShowBorder = () => {
        this.setState({ border: 'wisLProBorderblack' });
    }
    hideBorder = () => {
        this.setState({ border: '' });
    }
    render() {
        return (
            <Layout>
                <div className="a_wishlist_main bg-white tbdr container-fluid p-4 pt-3">
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <div className="row m-0">
                                <div className="col-2">A</div>
                                <div className="col-10">
                                    <div className="wishl_t1 border-bottom"></div>
                                    <div className="wishl_t2 border-bottom p-3">
                                        <div className="row m-0">
                                            <div className="col p-0">
                                                <div className="">
                                                    <button className="btn btn-sm">
                                                        <FontAwesomeIcon icon={faTh} />
                                                    </button>
                                                    <button className="btn btn-sm">
                                                        <FontAwesomeIcon icon={faBars} />
                                                    </button>
                                                    <button className="btn btn-sm btn-link text-decoration-none">
                                                        +Add Idea to List
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col p-0">
                                                <ul className="nav float-end">
                                                    <li>
                                                        <form className="">
                                                            <input type="text" className="wishlist_input form-control form-control-sm" placeholder="Search this list" />
                                                        </form>
                                                    </li>
                                                    <li>
                                                        <select className="form-select form-select-sm border-0" aria-label="Default select example">
                                                            <option selected>Filter &amp; Sort</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={'row m-0 wisLPro ' + this.state.border}>
                                            <div className="col-3 p-0 d-flex align-items-center">
                                                <a href="#" className="btn a_wishDragImg d-block "></a>
                                                <a href="#" className="btn rounded-0 w-75 h-100 p-0" onMouseOver={this.ShowBorder} onMouseOut={this.hideBorder}>
                                                    <img className="img-fluid" src="https://m.media-amazon.com/images/I/51hpsGSvHRL._SS135_.jpg" />
                                                </a>
                                            </div>
                                            <div className="col-4">
                                                <a href="#">Lenovo IdeaPad Gaming 3 Intel Core i7 10th Gen 15.6" FHD IPS 250Nits Gaming Laptop (8GB/512GB SSD/Win10/NVIDIA GTX 1650 4GB GDDR6 Graphics/120Hz/Onyx Black/2.2Kg), 81Y4019EIN</a>
                                                <div className="a_wish_rat position-relative">
                                                    <div className="a_rat h-100 sprtSht2 ss2_4_5star float-start"></div>
                                                    <div className="a_chevDown sprtSht2 float-start ss2_chevDown h-100" ></div>
                                                    <div className="text-primary">50</div>
                                                    <div className="a_wish_rat_progressbox position-absolute bg-white border shadow-sm p-3 mb-5 bg-body rounded">
                                                        <div class="arrow-up position-absolute border"></div>    
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-5">C</div>
                                        </div>
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


Wishlist.propTypes = {}
export default Wishlist