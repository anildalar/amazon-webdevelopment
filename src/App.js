import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <header>
        <div className="a_header_top p-1">
          <button className="me-1 btn h-100" style={{'width':'10%'}}>
            <img className="img-fluid" src="./logo.png" />
          </button>
          <button className="lh-1 text-white fs-6 me-1 btn h-100" style={{'width':'10%'}}>
            Deliver to Anil
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span className="fw-bold d-block"><span className="a_city">Neemuch</span><span className="a_pincode">458441</span></span>
          </button>
          <form className="bg-white hform w-50 h-75 d-inline-block">C</form>
          <button className="btn h-100" style={{'width':'4%'}}>D</button>
          <button className="btn h-100" style={{'width':'8%'}}>E</button>
          <button className="btn h-100" style={{'width':'8%'}}>F</button>
          <button className="btn h-100" style={{'width':'8%'}}>G</button>
        </div>
        <div className="a_header_bottom">
            
        </div>
      </header>
      <div className="a_main position-relative">
        <div className="a_main1 a_main_top">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-interval="500">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="500">
                <img src="./images/slider/1.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="500">
                <img src="./images/slider/2.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="500">
                <img src="./images/slider/3.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="500">
                <img src="./images/slider/4.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="500">
                <img src="./images/slider/5.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="500">
                <img src="./images/slider/6.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="500">
                <img src="./images/slider/7.jpg" className="d-block" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="ml-1 position-absolute a_main_bottom">
          <div className="a_main_bottom_1 row m-0 mb-3">
            <div className="col">A</div>
            <div className="col">B</div>
            <div className="col">C</div>
            <div className="col">D</div>

          </div>
          <div className="a_main_bottom_2 row m-0 mb-3">
            <div className="col-6">A</div>
            <div className="col-3">B</div>
            <div className="col-3">C</div>
          </div>
          <div className="a_main_bottom_3 p-3">
            <div className="">
              <h3 class="float-start">Today's Deals</h3><button type="button" className="float-start btn btn-link">see all deals</button>
            </div>
            <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner text-center">
                <div class="carousel-item active">
                  <div className="imgCont row">
                    <div className="col">1</div>
                    <div className="col">2</div>
                    <div className="col">3</div>
                    <div className="col">4</div>
                    <div className="col">5</div>
                    <div className="col">6</div>
                  </div>
                </div>
                  <div class="carousel-item">
                    <div className="imgCont row">
                      <div className="col">7</div>
                      <div className="col">8</div>
                      <div className="col">9</div>
                      <div className="col">10</div>
                      <div className="col">11</div>
                      <div className="col">12</div>
                    </div>
                  </div>
                    <div class="carousel-item">
                      <div className="imgCont row">
                        <div className="col">13</div>
                        <div className="col">14</div>
                        <div className="col">15</div>
                        <div className="col">16</div>
                        <div className="col">17</div>
                        <div className="col">18</div>
                      </div>
                    </div>
                    </div>
                    <button class="a_cc carousel-control-prev rounded-end" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="a_cc carousel-control-next rounded-start" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
            <footer></footer>
          </div>
          );
}

          export default App;
