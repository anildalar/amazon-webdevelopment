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
                <Header></Header>
                <div>Detail</div>
                <Footer></Footer>
            </Layout>
        )
    }
}


Detail.propTypes = {}
export default Detail