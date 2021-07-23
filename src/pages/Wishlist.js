import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        border:''
    }

    //2. Constructor

    //3. Method
    ShowBorder = ()=>{
        this.setState({border:'wisLProBorderblack'});
    }
    hideBorder = ()=>{
        this.setState({border:''});
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
                                        <div className="float-start">
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
                                        <ul className="nav float-end">
                                            <li>
                                                <form>
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
                                    <div>
                                        <div className={'row m-0 wisLPro '+this.state.border }>
                                            <div className="col-3 p-0">
                                                <a href="#" className="btn rounded-0 w-100 h-100" onMouseOver={this.ShowBorder} onMouseOut={this.hideBorder}>A</a>
                                            </div>
                                            <div className="col-4">B</div>
                                            <div className="col-5">C</div>
                                        </div>
                                        <div className={'row m-0 wisLPro '+this.state.border }>
                                            <div className="col-3 p-0">
                                                <a href="#" className="btn rounded-0 w-100 h-100" onMouseOver={this.ShowBorder} onMouseOut={this.hideBorder}>A</a>
                                            </div>
                                            <div className="col-4">B</div>
                                            <div className="col-5">C</div>
                                        </div>
                                        <div className={'row m-0 wisLPro '+this.state.border }>
                                            <div className="col-3 p-0">
                                                <a href="#" className="btn rounded-0 w-100 h-100" onMouseOver={this.ShowBorder} onMouseOut={this.hideBorder}>A</a>
                                            </div>
                                            <div className="col-4">B</div>
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