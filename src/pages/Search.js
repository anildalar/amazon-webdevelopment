import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

/**
* @author
* @class Search
**/
//This is a class Componet
class Search extends Component {
  //1. Property
  state = {}

  //2. Constructor
  constructor(props) {
    super(props);
  }

  //3. Method
  render() {
    return (
      <Layout>
        <div className="a_srch_main tbdr">
          <div className=" a_srch_top border-bottom">
            <p className="">1-16 of over 2,000 results for "laptop".
              <div class="dropdown float-end">
                <button class="btn border btn-sm btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort by: Featured
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li><button class="dropdown-item" type="button">Action</button></li>
                  <li><button class="dropdown-item" type="button">Another action</button></li>
                  <li><button class="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
            </p>
          </div>
          <div className="row a_srch_mbox m-0 mt-3">
            <div className="col-3 border-end">A</div>
            <div className="col-9 border-start">
              <div className="a_srch_FilterTop border-top border-bottom pt-3 pb-3">
                <h2>Filter by price</h2>
                <ul className="nav">
                  <li className="nav-item me-2">
                    <a className="nav-link btn btn-light border text-dark" href="#">Under $20,000</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link btn btn-light border text-dark" href="#">Under $20,000</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link btn btn-light border text-dark" href="#">Under $20,000</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link btn btn-light border text-dark" href="#">Under $20,000</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link btn btn-light border text-dark" href="#">Under $20,000</a>
                  </li>
                </ul>
              </div>
              <div className="a_srch_ProdResult border-top border-bottom pt-4 pb-4">
                <div className="row h-100">
                  <div className="col-3 tbdr">
                    <a href="#">
                      <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" />
                    </a>
                  </div>
                  <div className="col-9 tbdr">
                    <h5><a href="#" className="text-decoration-none text-dark">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a>ss</h5>
                    <p>
                        <div className="a_3start"></div>
                    </p>
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


Search.propTypes = {}
export default Search