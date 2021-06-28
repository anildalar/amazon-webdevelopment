import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Layout
**/

class Layout extends Component {
    state = {}
    render() {
        return (
            this.props.children
        )
    }
}


Layout.propTypes = {}
export default Layout