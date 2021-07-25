import React, { Component } from 'react'
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
                <div className="bgColor" style={{width:'100%'}}>
                    <Header></Header>
                    {this.props.children}
                    <Footer></Footer>
                </div>
                <div className="d-none">
                    A
                </div>

            </React.Fragment>
        )
    }
}


Layout.propTypes = {}
export default Layout