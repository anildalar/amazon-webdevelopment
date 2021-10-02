import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class SignIn
**/

class SignIn extends Component {
    //1. Properties
    state = {
        hide:'',
        hidepass:'d-none',
        eml:'',
        p:''
    }
    //constructor

    //3. Method
    signIn = (e)=>{
        e.preventDefault();
        //alert(this.state.eml);
        //alert(this.state.p);
        
        const data = {
            "email":this.state.eml,
            "password":this.state.p
        };

        fetch('http://localhost:4000/api/signin', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if(data.msg == 'Login Success'){
                    //set to the token in local storage
                    localStorage.setItem('token',data.tokn);

                    //Now jump to main Home page
                    this.props.history.push('/');

                }else{
                    alert('Invalid Creadentials');
                }

                //now set the token in local storage
                //localStorage.setItem('token');
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }
    hidePhoneInput=(e)=>{
        e.preventDefault();
        //alert('ok');
        this.setState({
            hide:'d-none',
            hidepass:''
        });
    }
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
                                <div className={"mb-3 "+this.state.hide}>
                                    <label for="mobno" className="form-label">Email or mobile phone number</label>
                                    <input onChange={ (e)=>{ this.setState({eml:e.target.value}) } } type="text" value={this.state.eml} autoFocus className="form-control form-control-sm" id="mobno" placeholder="" />
                                </div>
                                <div className={"mb-3 "+this.state.hidepass}>
                                    <label for="pass" className="form-label">Password</label>
                                    <input onChange={(e)=>{ this.setState({p:e.target.value}) }} type="password" value={this.state.p} autoFocus className="form-control form-control-sm" id="pass" placeholder="" />
                                </div>
                                <button type="submit" className={"btn amznBtn btn-sm border w-100 "+this.state.hide} onClick={this.hidePhoneInput}>Continue</button>
                                <button type="submit" className={"btn amznBtn btn-sm border w-100 "+this.state.hidepass} onClick={this.signIn}>Sign In</button>
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