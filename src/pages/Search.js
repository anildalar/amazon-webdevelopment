import React, { Component } from 'react'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';

/**
* @author
* @class Search
**/
//This is a class Componet
class Search extends Component {
  //1. Property
  //Js OBject can Contain Nexted object
  state = {
    rating: 'a_4_5star',
    view:{
        r:100,
        col1:3,
        col2:9
    }
  }

  //3. Method
  //Fat arrow function es6
  showGridView = ()=>{
    //alert('ok from show Grid view');
    this.setState({
      view:{
          r:'25 float-start',
          col1:12,
          col2:12
      }
  });
}
  showListView = ()=>{
   // alert('ok from show List view');
    this.setState({
      view:{
        r:100,
        col1:3,
        col2:9
      }
    });
  }
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
            <div className="col-3 border-end searchAside">
              <div className="avgCustRev mb-2">
                <span className="text-dark fw-bold">Avg. Customer Review</span>
                <ul className="list-group">
                  <li className="list-group-item p-0 border-0">
                    <a href="#" className="btn w-100 p-0 rounded-0"><span className="startRat d-block float-start sprtSht a_5star"></span><span className="float-start up">&amp; Up</span> </a>
                  </li>
                  <li className="list-group-item p-0 border-0">
                    <a href="#" className="btn w-100 p-0 rounded-0"><span className="startRat d-block float-start sprtSht a_4star"></span><span className="float-start up">&amp; Up</span> </a>
                  </li>
                  <li className="list-group-item p-0 border-0">
                    <a href="#" className="btn w-100 p-0 rounded-0"><span className="startRat d-block float-start sprtSht a_3star"></span><span className="float-start up">&amp; Up</span> </a>
                  </li>
                  <li className="list-group-item p-0 border-0">
                    <a href="#" className="btn w-100 p-0 rounded-0"><span className="startRat d-block float-start sprtSht a_2star"></span><span className="float-start up">&amp; Up</span> </a>
                  </li>
                  <li className="list-group-item p-0 border-0">
                    <a href="#" className="btn w-100 p-0 rounded-0"><span className="startRat d-block float-start sprtSht a_1star"></span><span className="float-start up">&amp; Up</span> </a>
                  </li>

                </ul>
              </div>
              <div className="asideprice mb-2">
                <span className="text-dark fw-bold">Price</span>
                <ul className="list-group">
                  <li className="list-group-item p-0 border-0">
                    <a href="#" className="btn text-start w-100 p-0 rounded-0">Under $20,0000</a>
                  </li>
                  <li className="list-group-item p-0 border-0">
                    <a href="#" className="btn text-start w-100 p-0 rounded-0">$20,000 - $30,000 </a>
                  </li>
                  <li className="list-group-item p-0 border-0">
                    <a href="#" className="btn text-start w-100 p-0 rounded-0">$20,000 - $30,000 </a>
                  </li>
                  <li className="list-group-item p-0 border-0">
                    <a href="#" className="btn text-start w-100 p-0 rounded-0">$20,000 - $30,000 </a>
                  </li>
                  <li className="list-group-item p-0 border-0">
                    <div className="row m-0">
                      <div className="col p-1">
                        <input className="form-control form-control-sm" placeholder="$MIN" />
                      </div>
                      <div className="col p-1"><input className="form-control form-control-sm" placeholder="$MAX" /></div>
                      <div className="col p-1">
                        <a href="#" className="btn btn-light btn-sm rounded-1 border">Go</a>
                      </div>
                    </div>

                  </li>
                </ul>
              </div>
              <div className="srchAsideBrands">
               <span className="text-dark fw-bold">Brands</span>
                <ul class="list-group">
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                </ul>
               

                <div id="demo" class="collapse">
                <ul class="list-group">
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                  <li class="list-group-item p-0 border-0">
                    <a href="#" className="text-dark text-decoration-none">
                    <input class="form-check-input me-1" type="checkbox" value=""  />
                    HP
                    </a>                    
                  </li>
                </ul>
                </div>
                <button className="btn btn-link btn-sm" data-bs-toggle="collapse" data-bs-target="#demo">See More</button>
              </div>
            </div>
            <div className="col-9 p-4 border-start">
              <div className="">
                <button className="btn btn-sm float-end" onClick={this.showListView}>
                  <FontAwesomeIcon icon={faList} />
                </button>
                <button className="btn btn-sm float-end" onClick={this.showGridView}>
                  <FontAwesomeIcon icon={faTh} />
                </button>
              </div>
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
              <div className="a_srch_ProdResult  pt-4 pb-4">
                <div className={'row m-0 border-top border-bottom w-'+this.state.view.r}>
                  <div className={'p-3 col-'+this.state.view.col1}>
                    <a href="#">
                      <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" />
                    </a>
                  </div>
                  <div className={'p-3 col-'+this.state.view.col2}>
                    <h5><a href="#" className="text-decoration-none text-dark">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a>ss</h5>
                    <p>
                      <a href="#" className={'a_3start d-block sprtSht ' + this.state.rating}></a>
                    </p>
                  </div>
                </div>
                <div className={'row m-0 border-top border-bottom w-'+this.state.view.r}>
                  <div className={'p-3 col-'+this.state.view.col1}>
                    <a href="#">
                      <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" />
                    </a>
                  </div>
                  <div className={'p-3 col-'+this.state.view.col2}>
                    <h5><a href="#" className="text-decoration-none text-dark">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a>ss</h5>
                    <p>
                      <a href="#" className={'a_3start d-block sprtSht ' + this.state.rating}></a>
                    </p>
                  </div>
                </div>
                <div className={'row m-0 border-top border-bottom w-'+this.state.view.r}>
                  <div className={'p-3 col-'+this.state.view.col1}>
                    <a href="#">
                      <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" />
                    </a>
                  </div>
                  <div className={'p-3 col-'+this.state.view.col2}>
                    <h5><a href="#" className="text-decoration-none text-dark">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a>ss</h5>
                    <p>
                      <a href="#" className={'a_3start d-block sprtSht ' + this.state.rating}></a>
                    </p>
                  </div>
                </div>
                <div className={'row m-0 border-top border-bottom w-'+this.state.view.r}>
                  <div className={'p-3 col-'+this.state.view.col1}>
                    <a href="#">
                      <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" />
                    </a>
                  </div>
                  <div className={'p-3 col-'+this.state.view.col2}>
                    <h5><a href="#" className="text-decoration-none text-dark">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a>ss</h5>
                    <p>
                      <a href="#" className={'a_3start d-block sprtSht ' + this.state.rating}></a>
                    </p>
                  </div>
                </div>
                <div className={'row m-0 border-top border-bottom w-'+this.state.view.r}>
                  <div className={'p-3 col-'+this.state.view.col1}>
                    <a href="#">
                      <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" />
                    </a>
                  </div>
                  <div className={'p-3 col-'+this.state.view.col2}>
                    <h5><a href="#" className="text-decoration-none text-dark">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a>ss</h5>
                    <p>
                      <a href="#" className={'a_3start d-block sprtSht ' + this.state.rating}></a>
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