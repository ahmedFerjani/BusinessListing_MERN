import "./Header.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header className={`site-header header-style-${props.style.type}`}>
        <div className="site-navigation">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="navbar navbar-expand-lg navigation-area">
                  <div className="mainmenu-area">
                    <nav className="menu">
                      <ul id="nav">
                        <li>
                          <NavLink
                            to="/"
                            exact
                            activeStyle={{
                              color: "red",
                            }}
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="dropdown-trigger">
                          <NavLink
                            to="/listing"
                            activeStyle={{
                              color: "red",
                            }}
                          >
                            Listing
                          </NavLink>
                          <ul className="dropdown-content">
                            <li>
                              <a href="listing-grid.html">Listing Grid</a>
                            </li>
                            <li>
                              <a href="listing-list.html">Listing List</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <NavLink
                            exact
                            activeClassName="selected"
                            to="/businesses"
                            activeStyle={{
                              color: "red",
                            }}
                          >
                            All Businesses
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/steps"
                            exact
                            activeStyle={{
                              color: "red",
                            }}
                          >
                            How it works ?
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                    {/*/.menu*/}
                  </div>
                  {/*~./ mainmenu-wrap ~*/}
                  <div className="site-logo-block">
                    <a className="navbar-brand site-logo" href="index.html">
                      <img src="assets/images/logo/logo-white.png" alt="logo" />
                      <img src="assets/images/logo/logo.png" alt="logo" />
                    </a>
                  </div>
                  {/*~./ site-logo-block ~*/}
                  <div className="header-navigation-right">
                    {/*~./ site-logo-block ~*/}
                    <div className="search-wrap">
                      <div
                        className="search-btn"
                        data-toggle="modal"
                        data-target="#header_search_model"
                      >
                        <span className="icon icon-search32" />
                        <span className="text">Search</span>
                      </div>
                    </div>
                    {/*~./ search-wrap ~*/}
                    <div className="user-registration-area dropdown">
                      <a
                        className="user-reg-btn"
                        href="#"
                        data-toggle="modal"
                        data-target="#reg_form_model"
                      >
                        <span className="icon icon-user-1" />
                        <span className="text">Register</span>
                      </a>
                    </div>
                    <div className="user-registration-area">
                      <Link className="user-reg-btn" to="/dashboard">
                        <span className="icon icon-user-1" />
                        <span className="text">My Account</span>
                      </Link>
                    </div>
                    <div className="add-listing-area">
                      <a className="btn btn-default" href="add-listing.html">
                        + add listing
                      </a>
                    </div>
                  </div>
                  {/*~./ header-navigation-right ~*/}
                </div>
                {/*~./ navigation-area ~*/}
              </div>
            </div>
          </div>
        </div>
        {/*~./ site-navigation ~*/}
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Mobile Menu
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="mobile-menu">
          <a className="mobile-logo" href="index.html">
            <img src="assets/images/logo/mobile-logo.png" alt="logo" />
          </a>
        </div>
        {/*~~./ end mobile menu ~~*/}
      </header>
      {/*~~~ Sticky Header ~~~*/}
      <div id="sticky-header" />
    </>
  );
}

export default Header;
