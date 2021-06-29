import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
                            <div></div>
                        </div>
                        <div className="row"></div>
                    </div>
                </div>
            </Layout>
        )
    }
}


Detail.propTypes = {}
export default Detail