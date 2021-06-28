import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

/**
* @author
* @class Home
**/

class Home extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </Layout>
        )
    }
}


Home.propTypes = {}
export default Home