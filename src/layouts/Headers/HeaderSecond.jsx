import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../__assets/img/logo/logo-bl-p.png";

const HeaderSecond = () => {
  return (
    <>
      <header className="header1">
        <div className="header-top d-none d-md-block">
          <div className="container header-container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-link">
                  <a href="about.html" className="text-btn">
                    About Us
                  </a>
                  <a href="register.html" className="text-btn">
                    My account
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-right">
                  <a href="login.html" className="text-btn">
                    <i className="flaticon-avatar"></i>Sign in
                  </a>
                  <select
                    name="lan-select"
                    id="lan-select"
                    className="language-select border-left"
                  >
                    <option value="1">English</option>
                    <option value="2">Hindi</option>
                    <option value="3">Arabic</option>
                    <option value="3">Bengali</option>
                    <option value="3">French</option>
                  </select>
                  <select
                    name="currency-select"
                    id="currency-select"
                    className="currency-select border-left"
                  >
                    <option value="1">USD</option>
                    <option value="2">EUR</option>
                    <option value="3">JPY</option>
                    <option value="4">GBP</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-main header-main1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="header-main-content-wrapper">
                  <div className="header-main-left header-main-left-header1">
                    <div className="header-logo header1-logo">
                      <Link to="/" className="logo-bl">
                        <img src={logo} alt="logo-img" />
                      </Link>
                    </div>
                    <div className="main-menu main-menu1 d-none d-lg-block">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <NavLink to={"/"}>Home</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/shop"}>Shop</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/blog"}>Blog</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="header-main-right header-main-right-header1">
                    <form
                      action="#"
                      className="filter-search-input header-search d-none d-xl-inline-block"
                    >
                      <input type="text" placeholder="Search Products....." />
                      <button>
                        <i className="fal fa-search"></i>
                      </button>
                    </form>
                    <div className="action-list d-none d-md-flex action-list-header1">
                      <div className="action-item action-item-cart">
                        <a href="/cart" className="view-cart-button">
                          <i className="fal fa-shopping-bag"></i>
                          <span className="action-item-number">3</span>
                        </a>
                      </div>
                      <div className="action-item action-item-wishlist">
                        <a href="/wishlist" className="view-wishlist-button">
                          <i className="fal fa-heart"></i>
                          <span className="action-item-number">2</span>
                        </a>
                      </div>
                    </div>
                    <div className="menu-bar d-xl-none ml-20">
                      <a className="side-toggle" href="/barico">
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSecond;
