import React, { Component } from 'react'

/**
* @author
* @class Register
**/

class Register extends Component {
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
                            <a href="#" className="d-block m-3 mx-auto logo spriteSheet position-relative">
                                <div className="ccName position-absolute spriteSheet"></div>
                            </a>

                        </div>
                        <div className="p-4 border">
                            <form>
                                <h3>Create Account</h3>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Your name</label>
                                    <input type="text" className="form-control form-control-sm" id="name" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Your name</label>
                                    <div className="row">
                                        <div className="col-4">
                                            
                                        </div>
                                        <div className="col-8">
                                            <input type="text" className="form-control form-control-sm" id="name" placeholder="" />
                                        </div>
                                    </div>

                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email (optional)</label>
                                    <input type="email" className="form-control form-control-sm" id="email" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-sm" id="password" placeholder="" />
                                    <span>Passwords must be at least 6 characters.</span>
                                </div>
                                <p>We will send you a text to verify your phone.Message and Data rates may apply.</p>
                                <button type="submit" className="btn amznBtn btn-sm border w-100">Continue</button>
                                <p>
                                    By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
                                </p>
                            </form>
                            <a href="#">Need help?</a>
                        </div>

                        <hr />
                        <p className="m-0">Already have an account? Sign in</p>
                        <p className="m-0">Buying for work? <button type="button" className="btn btn-light btn-link btn-sm border w-100 border">Create a free business account</button></p>
                        
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


Register.propTypes = {}
export default Register