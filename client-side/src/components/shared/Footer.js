import React from "react";

function Footer() {
  return (
    <footer className="site-footer footer-default-style">
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6"></div>
            {/*~./ end copyright ~*/}
            <div className="col-lg-6  col-md-6">
              <div className="footer-bottom-right">
                <h5>
                  Made With <i className="fa fa-heart" />{" "}
                  <a href="https://github.com/ahmedFerjani" target="_blank">
                    ahmedFerjani
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
