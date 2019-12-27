import React, { Fragment, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated, isToken }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const userCredentials = {
      email,
      password
    };

    login(userCredentials);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/manage-account" />;
  }

  return (
    <Fragment>
      <section className="form mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="card bg-white p-4 mb-4">
                <div className="card-body">
                  <h1>
                    <i className="fas fa-sign-in-alt"></i> Login
                  </h1>
                  <p>
                    Log in to list your bootcamp or rate, review and favorite
                    bootcamps
                  </p>
                  <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        value={email}
                        minLength="6"
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                        minLength="6"
                        value={password}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary btn-block"
                      />
                    </div>
                  </form>
                  <p>
                    {" "}
                    Forgot Password?{" "}
                    <a href="reset-password.html">Reset Password</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
