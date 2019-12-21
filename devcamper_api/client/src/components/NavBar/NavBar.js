import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Fragment>
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-laptop-code"></i> DevCamper
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link" href="login.html">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </li>
            <li className="nav-item d-none d-sm-block">
              <a className="nav-link" href="#/">
                |
              </a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="bootcamps.html"> */}
              <Link to="/bootcamps" className="nav-link">
                Browse Bootcamps
              </Link>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </Fragment>
);

export default NavBar;
