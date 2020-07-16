import React from "react";
import Header from "../shared/Header";
function Steps() {
  return (
    <>
      <Header style="one" />

      <div className="site-content">
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start How It Work Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <section className="how-it-work-section ptb-100">
          <div className="container">
            <div className="row">
              {/*~~ Start single How Work ~~*/}
              <div className="col-12">
                <div className="single-how-work">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="how-work-thumb">
                        <img src="assets/images/howitwork/1.png" alt="thumb" />
                      </div>
                      {/*~./how-work-thumb ~*/}
                    </div>
                    <div className="col-lg-6">
                      <div className="how-work-info">
                        <h2 className="step-no">1</h2>
                        <div className="info">
                          <h3 className="title">Register First</h3>
                          <p>
                           
                          </p>
                        </div>
                      </div>
                      {/*~./how-work-info ~*/}
                    </div>
                  </div>
                </div>
              </div>
              {/*~./ end single how work ~*/}
              {/*~~ Start single How Work ~~*/}
              <div className="col-12">
                <div className="single-how-work">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="how-work-thumb">
                        <img src="assets/images/howitwork/2.png" alt="thumb" />
                      </div>
                      {/*~./how-work-thumb ~*/}
                    </div>
                    <div className="col-lg-6">
                      <div className="how-work-info">
                        <h2 className="step-no">2</h2>
                        <div className="info">
                          <h3 className="title">
                            Submit Your Business Information
                          </h3>
                          <p>
                           
                          </p>
                        </div>
                      </div>
                      {/*~./how-work-info ~*/}
                    </div>
                  </div>
                </div>
              </div>
              {/*~./ end single how work ~*/}
              {/*~~ Start single How Work ~~*/}
              <div className="col-12">
                <div className="single-how-work">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="how-work-thumb">
                        <img src="assets/images/howitwork/3.png" alt="thumb" />
                      </div>
                      {/*~./how-work-thumb ~*/}
                    </div>
                    <div className="col-lg-6">
                      <div className="how-work-info">
                        <h2 className="step-no">3</h2>
                        <div className="info">
                          <h3 className="title">Add Your Listing</h3>
                          <p>
                           
                          </p>
                        </div>
                      </div>
                      {/*~./how-work-info ~*/}
                    </div>
                  </div>
                </div>
              </div>
              {/*~./ end single how work ~*/}
              {/*~~ Start single How Work ~~*/}
              <div className="col-12">
                <div className="single-how-work">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="how-work-thumb">
                        <img src="assets/images/howitwork/4.png" alt="thumb" />
                      </div>
                      {/*~./how-work-thumb ~*/}
                    </div>
                    <div className="col-lg-6">
                      <div className="how-work-info">
                        <h2 className="step-no">4</h2>
                        <div className="info">
                          <h3 className="title">Help Customers Find You</h3>
                          <p>
                           
                          </p>
                        </div>
                      </div>
                      {/*~./how-work-info ~*/}
                    </div>
                  </div>
                </div>
              </div>
              {/*~./ end single how work ~*/}
            </div>
          </div>
        </section>
        {/*~./ end how it work section ~*/}
      </div>
    </>
  );
}

export default Steps;
