import React from "react";
import Settings from "./Settings";
import MyListing from "./MyListing";
import Wishlist from "./Wishlist"
function Dashboard() {
  return (
    <div>
      <div className="site-content">
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Dashboard Site Content
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="dashboard-site-content">
          <div className="dashborad-menu-area">
            <div className="btn-close">
              <span className="icon-cross" />
            </div>
            <div className="site-logo-block">
              <a className="navbar-brand site-logo" href="index.html">
                <img src="assets/images/logo/logo2.png" alt="logo" />
              </a>
            </div>
            {/*~./ site-logo-block ~*/}
            <div className="dashborad-menu-main tse-scrollable">
              <div className="tse-content">
                <div className="filter-tab-area">
                  <ul className="dashborad-menu nav nav-tabs" role="tablist">
                    <li>
                      <a data-toggle="tab" href="#dashboard_setting" role="tab">
                        <span className="icon icon-settings-12" />
                        <span>Setting</span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#dashboard_listing" role="tab">
                        <span className="icon icon-medical-history" />
                        <span>My Listing</span>
                      </a>
                    </li>
                    <li>
                      <a
                        data-toggle="tab"
                        href="#dashboard_wishlist"
                        role="tab"
                      >
                        <span className="icon icon-shopping-cart" />
                        <span>Wishlist</span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span className="icon icon-logout-1" />
                        <span>logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/*~./ filter-tab-area ~*/}
              </div>
            </div>
            {/*~./ dashborad-menu-main ~*/}
          </div>
          <div className="dashborad-contant-area">
            {/*~~~~~ Start Dashborad Header ~~~~~*/}
            <header className="dashborad-header">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6"></div>
                  <div className="col-lg-6 col-md-6">
                    <div className="header-right">
                      <div className="user-registration-area dropdown">
                        <a className="user-reg-btn" href="#">
                          <div className="user-thumb">
                            <img
                              src="assets/images/comments/user.png"
                              alt="img"
                            />
                          </div>
                          <div className="user-name">
                            <span>Welcome</span> Mohamed Arafa
                          </div>
                        </a>
                      </div>
                    </div>
                    {/*~~./ header-right ~~*/}
                  </div>
                </div>
              </div>
            </header>
            {/*~./ end dashborad header ~*/}
            {/*~~~~~ Start Dashborad Contant ~~~~~*/}
            <div className="dashborad-contant tab-content">

              <Settings />
              <MyListing />
              <Wishlist />
     {/*~./ end tab pane ~*/}
            </div>
            {/*~./ end dashborad contant ~*/}
          </div>
        </div>
        {/*~./ end dashboard site content ~*/}
      </div>
    </div>
  );
}

export default Dashboard;
