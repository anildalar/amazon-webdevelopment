import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

/**
* @author
* @class Layout
**/

class Layout extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header></Header>     
                {this.props.children}
                <Footer></Footer>
            </React.Fragment> 
        )
    }
}


Layout.propTypes = {}
export default Layout