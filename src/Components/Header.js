import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top border-bt">
          <div className="container-fluid container wrapper   custom__nav">
            <Link className="navbar-brand custom__navbar--brand" to="/">
              <img
                src="assets/images/logo.svg"
                className="nav__brand"
                alt="nav__logo"
              />
            </Link>
            <button
              className="navbar-toggler custom__nav--toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse nav-list custom__nav--list"
              id="navbarNav"
            >
              <ul className="navbar-nav ">
                <li className="nav-item custom__nav--item">
                  <Link
                    className="nav-link custom__nav--link active"
                    aria-current="page"
                    to="#"
                  >
                    How it works
                  </Link>
                </li>
                <li className="nav-item custom__nav--item">
                  <Link className="nav-link custom__nav--link" to="#">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item custom__nav--item">
                  
                    <div className="dropdown">
                      <button
                        className="btn  dropdown-toggle custom__nav--link"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Account
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item" type="button">
                          <Link className="nav-lin custom__subnav--link" to="/login"> <i className="fa fa-lock me-1"></i> Sign in</Link>
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" type="button">
                          <Link className="nav-lin custom__subnav--link" to="/register"><i className="fa fa-user-plus me-1"></i>Sign up</Link>
 
                          </button>
                        </li>
                      </ul>
                    </div>
                 
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
