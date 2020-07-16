import React from "react";
import Footer from "../shared/Footer";
import Signin from "../Signin";
import Signup from "../Signup";
import Banner from "../home/Banner";
import Locations from "../home/Locations";
import Todo from "../home/Todo";
import Process from "../home/Process";
import Users from "../user/Users";
import Header from "../shared/Header";

function Home() {
  return (
    <>
      <Header style={{type: "two"}}/>
      <div className="site-content">
        <Banner />
        <Users />
        <Locations />
        <Process />
        <Todo />
      </div>

      <Footer />
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Start Header Search Model
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div
        id="header_search_model"
        className="header-search-model modal fade"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog header-search-area" role="document">
          <div className="header-search-area-inner">
            <div className="modal-header">
              <button
                type="button"
                className="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <img src="assets/images/icon/close.png" alt="close" />
              </button>
            </div>
            <div className="search-form modal-content">
              <form action="#">
                <input
                  type="search"
                  placeholder="Baracelo Hotels & Spa Resort"
                />
                <button type="submit">
                  <span className="icon-search32" />
                </button>
              </form>
              <div className="search-by-cat">
                <a href="#" className="single-cat restaurant">
                  <div className="icon">
                    <span className="icon-fast-food" />
                  </div>
                  <div className="text">Restaurants</div>
                </a>
                {/*~./ single-cat ~*/}
                <a href="#" className="single-cat beauty">
                  <div className="icon">
                    <span className="icon-grooming" />
                  </div>
                  <div className="text">Beauty</div>
                </a>
                {/*~./ single-cat ~*/}
                <a href="#" className="single-cat automotive">
                  <div className="icon">
                    <span className="icon-wrench" />
                  </div>
                  <div className="text">Automotive</div>
                </a>
                {/*~./ single-cat ~*/}
                <a href="#" className="single-cat hotel">
                  <div className="icon">
                    <span className="icon-building" />
                  </div>
                  <div className="text">Hotels</div>
                </a>
                {/*~./ single-cat ~*/}
              </div>
            </div>
            {/*~./ search-form ~*/}
          </div>
        </div>
      </div>
      {/*~./ end header search model ~*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Start User Registation Model
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div
        id="reg_form_model"
        className="user-reg-form-area modal fade"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog register-modal-area" role="document">
          <div className="register-modal-area-outer-inner">
            <div className="modal-header">
              <button
                type="button"
                className="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <img src="assets/images/icon/close.png" alt="close" />
              </button>
            </div>
            <div className="modal-content user-register-area">
              <Signin />
              <Signup />
            </div>
          </div>
        </div>
      </div>
      {/*~./ end user registation model ~*/}
    </>
  );
}

export default Home;
