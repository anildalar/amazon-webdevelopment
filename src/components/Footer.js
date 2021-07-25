import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @class Footer
**/

class Footer extends Component {
    state = {}
    render() {
        //Fat Arrow Function
        const handleShow2 = () => {
            this.setState({ showCountryModal: true });
        }
        return (
            <>
                <footer>
                    <a href="#" className="btn btn-success w-100 rounded-0 border-0 lh-lg" style={{ backgroundColor: '#37475a', height: '50px' }}>Back to top</a>
                    <div className="a_footer_top pb-5">
                        <div className="container pt-5">
                            <div className="row text-white">
                                <div className="col-3">
                                    <h6>Get to Know Us</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Carrers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Press Releases</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Amazon Cares</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Gift a Smile</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <h6>Connect with Us</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Facebook</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Twitter</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Instagram</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <h6>Make Money with Us</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sell on Amazon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sell under Amazon Accelerator</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Amazon Global Selling</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">Become an Affiliate</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">Fulfilment by Amazon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">Advertise Your Products</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">Amazon Pay on Merchants</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <h6>Let Us Help You</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">COVID-19 and Amazon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Your Account</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Return Centre</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">100% Purchase Protection</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Amazon App Download</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Amazon Assistance Download Protection</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Help</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="text-secondary" />
                        <div className="d-flex justify-content-center">
                            <a href="#" className="btn me-5">
                                <img className="img-fluid" src="./logo.png" />
                            </a>
                            <button onMouseOver={handleShow2} type="button" className="a_foot_eng btn btn-sm pt-0 pb-0 btn-outline-secondary"><FontAwesomeIcon icon={faGlobe} /> English</button>
                        </div>
                        <div className="d-flex justify-content-center">

                            <ul className="nav">
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Australia</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Brazil</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Australia</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Brazil</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Australia</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Brazil</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Australia</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Brazil</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Australia</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Brazil</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Australia</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Brazil</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="a_footer_bottom">
                        <div className="container pt-4">
                            <div className="row">
                                <div className="col">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">AbeBooks
                                                Books, art
                                                &amp; collectibles</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Shopbop
                                                Designer
                                                Fashion Brands</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">AbeBooks
                                                Books, art
                                                &amp; collectibles</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Shopbop
                                                Designer
                                                Fashion Brands</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">AbeBooks
                                                Books, art
                                                &amp; collectibles</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Shopbop
                                                Designer
                                                Fashion Brands</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">AbeBooks
                                                Books, art
                                                &amp; collectibles</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Shopbop
                                                Designer
                                                Fashion Brands</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">AbeBooks
                                                Books, art
                                                &amp; collectibles</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Shopbop
                                                Designer
                                                Fashion Brands</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mt-5 text-secondary">Conditions of Use &amp; SalePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </footer>
            </>
        )
    }
}


Footer.propTypes = {}
export default Footer