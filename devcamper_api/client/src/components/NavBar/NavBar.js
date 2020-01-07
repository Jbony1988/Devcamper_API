import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const NavBar = ({
  bootcamp: { _id },
  auth: { isAuthenticated, loading },
  user,
  logout
}) => {
  return (
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
            {!isAuthenticated && (
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
            )}

            {isAuthenticated && (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <i className="fas fa-user"></i> Account
                  </a>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item"
                      to={`/manage-bootcamps/${_id}`}
                    >
                      Manage Bootcamp
                    </Link>
                    <Link className="dropdown-item" to={"/manage-reviews"}>
                      Manage Reviews
                    </Link>
                    <Link className="dropdown-item" to={"/manage-account"}>
                      Manage Account
                    </Link>

                    <div class="dropdown-divider"></div>
                    <Link onClick={logout} className="dropdown-item">
                      <i class="fas fa-sign-out-alt"></i> Logout
                    </Link>
                  </div>
                </li>
                <li class="nav-item d-none d-sm-block">
                  <Link class="nav-link" href="#/">
                    |
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bootcamps" className="nav-link">
                    Browse Bootcamps
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth.user,
  bootcamp: state.bootcamps.bootcamp,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavBar);
