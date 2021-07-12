import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class SignIn
**/

class SignIn extends Component {
    //1. Properties
    state = {}
    //constructor

    //3. Method

    render() {
        return (
            <>
                <div className="row justify-content-center signinformcont">

                    <div className="col-3 p-0 ">
                        <div className="text-center">
                            <a href="#" className=" d-block m-3 mx-auto logo spriteSheet position-relative">
                                <div className="ccName position-absolute spriteSheet"></div>
                            </a>
                            
                        </div>
                        <div className="p-4 border">
                            <form>
                                <h3>Sign-In</h3>
                                <div className="mb-3">
                                    <label for="mobno" className="form-label">Email or mobile phone number</label>
                                    <input type="text" className="form-control form-control-sm" id="mobno" placeholder="" />
                                </div>
                                <button type="submit" className="btn amznBtn btn-sm border w-100">Continue</button>
                                <p>
                                    By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
                                </p>
                            </form>
                            <a href="#">Need help?</a>
                        </div>
                        
                        <hr />
                        <p className="text-center">New to Amazon?</p>
                        <button type="button" className="btn btn-light btn-sm border w-100 border">Create your Amazon Account</button>
                    </div>
                </div>
                <footer className="">
                    <ul className="nav justify-content-center mt-4">
                        <li className="nav-item">
                            <a className="nav-link p-1" href="#">Conditions of Use </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-1" href="#"> Privacy Notice </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-1" href="#">Help </a>
                        </li>
                    </ul>
                    <span className="d-block text-center">© 1996-2021, Amazon.com, Inc. or its affiliates</span>
                </footer>
            </>
        )
    }
}


SignIn.propTypes = {}
export default SignIn