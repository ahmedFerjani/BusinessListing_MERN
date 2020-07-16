import React from "react";

function Locations() {
  return (
    <div className="featured-locations-area featured-location-style-one ptb-100">
      <div className="container">
        <div className="row">
          {/*~~~~~ Start Section Header ~~~~~*/}
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">
                Top Featured <span>Locations</span>
              </h2>
              <p>What do you want to do today</p>
              <div className="divider">
                <img src="assets/images/icon/divider.png" alt="icon" />
              </div>
            </div>
          </div>
          {/*./ section-header */}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="featured-locations-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    {/*~~~~~ Start Location Card Item ~~~~~*/}
                    <div className="col-12">
                      <a href="#" className="location-card-item">
                        <figure className="location-thumb">
                          <img
                            src="assets/images/featured/1/1.jpg"
                            alt="Thmubnail"
                          />
                        </figure>
                        {/*./ featured-media */}
                        <div className="featured-type featured">
                          TOP <br />
                          FEATURED
                        </div>
                        <div className="location-content">
                          <h3 className="name">Boston</h3>
                          {/*./ name */}
                        </div>
                        {/*./ location-content */}
                      </a>
                    </div>
                    {/*~./ end location card item ~*/}
                    {/*~~~~~ Start Location Card Item ~~~~~*/}
                    <div className="col-lg-6 col-md-6">
                      <a href="#" className="location-card-item">
                        <figure className="location-thumb">
                          <img
                            src="assets/images/featured/1/2.jpg"
                            alt="Thmubnail"
                          />
                        </figure>
                        {/*./ featured-media */}
                        <div className="location-content">
                          <h3 className="name">Philadelphia</h3>
                          {/*./ name */}
                        </div>
                        {/*./ location-content */}
                      </a>
                    </div>
                    {/*~./ end location card item ~*/}
                    {/*~~~~~ Start Location Card Item ~~~~~*/}
                    <div className="col-lg-6 col-md-6">
                      <a href="#" className="location-card-item">
                        <figure className="location-thumb">
                          <img
                            src="assets/images/featured/1/3.jpg"
                            alt="Thmubnail"
                          />
                        </figure>
                        {/*./ featured-media */}
                        <div className="location-content">
                          <h3 className="name">Washington</h3>
                          {/*./ name */}
                        </div>
                        {/*./ location-content */}
                      </a>
                    </div>
                    {/*~./ end location card item ~*/}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    {/*~~~~~ Start Location Card Item ~~~~~*/}
                    <div className="col-lg-6 col-md-6">
                      <a href="#" className="location-card-item">
                        <figure className="location-thumb">
                          <img
                            src="assets/images/featured/1/4.jpg"
                            alt="Thmubnail"
                          />
                        </figure>
                        {/*./ featured-media */}
                        <div className="location-content">
                          <h3 className="name">Chicago</h3>
                          {/*./ name */}
                        </div>
                        {/*./ location-content */}
                      </a>
                    </div>
                    {/*~./ end location card item ~*/}
                    {/*~~~~~ Start Location Card Item ~~~~~*/}
                    <div className="col-lg-6 col-md-6">
                      <a href="#" className="location-card-item">
                        <figure className="location-thumb">
                          <img
                            src="assets/images/featured/1/5.jpg"
                            alt="Thmubnail"
                          />
                        </figure>
                        {/*./ featured-media */}
                        <div className="location-content">
                          <h3 className="name">Los Angeles</h3>
                          {/*./ name */}
                        </div>
                        {/*./ location-content */}
                      </a>
                    </div>
                    {/*~./ end location card item ~*/}
                    {/*~~~~~ Start Location Card Item ~~~~~*/}
                    <div className="col-12">
                      <a href="#" className="location-card-item">
                        <figure className="location-thumb">
                          <img
                            src="assets/images/featured/1/6.jpg"
                            alt="Thmubnail"
                          />
                        </figure>
                        {/*./ featured-media */}
                        <div className="featured-type trending">
                          <span className="fa fa-bolt" />
                        </div>
                        <div className="location-content">
                          <h3 className="name">New York</h3>
                          {/*./ name */}
                        </div>
                        {/*./ location-content */}
                      </a>
                    </div>
                    {/*~./ end location card item ~*/}
                  </div>
                </div>
              </div>
            </div>
            {/*./ featured-locations-content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
