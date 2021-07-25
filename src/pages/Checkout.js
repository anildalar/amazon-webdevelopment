import React, { Component } from 'react'
import Layout from '../components/Layout'

/**
* @author
* @class Checkout
**/

class Checkout extends Component {
  //1 . Property
  state = {}
  
  sty = `
  .a_checkout_main{
        height:1000px;
        border:1px dashed red;
      }
      
  `;

  //2. Construc


  //3. Method
  render() {
    return (
      <Layout>
        <style>
          { this.sty }
        </style>
        <h1>This is Checkout Pages</h1>
        <div className="a_checkout_main">
          
        </div>
      </Layout>
    )
  }
}


Checkout.propTypes = {}
export default Checkout