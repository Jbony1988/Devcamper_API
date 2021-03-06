import React, { Fragment, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import store from "../../store";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated, history }) => {
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
    return <Redirect to="/" />;
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
                    <Link to="/forgotpassword">Reset Password</Link>
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
