import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { register } from "../../actions/auth";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated, isToken }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    user: true,
    publisher: false,
    password2: ""
  });

  const { name, email, user, publisher, password, password2, role } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      // console.log(formData);
      const newUser = {
        name,
        email,
        password,
        role
      };

      console.log(newUser);

      register(newUser);

      // try {
      //   const config = {
      //     headers: {
      //       "Content-type": "application/json"
      //     }
      //   };

      //   const body = JSON.stringify(newUser);
      //   const res = await axios.post("/api/v1/auth/register", body, config);
      //   console.log(res.data);
      // } catch (err) {
      //   console.error(err.response.data);
      // }
    }
  };

  // Redirect if logged in
  if (isToken) {
    return <Redirect to="/bootcamps" />;
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
                    <i className="fas fa-user-plus"></i> Register
                  </h1>
                  <p>
                    Register to list your bootcamp or rate, review and favorite
                    bootcamps
                  </p>
                  <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter full name"
                        required
                        autoComplete="off"
                        value={name}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        autoComplete="off"
                        value={email}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                        autoComplete="off"
                        value={password}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password2">Confirm Password</label>
                      <input
                        type="password"
                        name="password2"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Confirm password"
                        required
                        value={password2}
                        onChange={e => onChange(e)}
                      />
                    </div>

                    <div class="card card-body mb-3">
                      <h5>User Role</h5>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          checked={role === "user"}
                          value="user"
                          onChange={e => onChange(e)}
                        />
                        <label class="form-check-label">
                          Regular User (Browse, Write reviews, etc)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          checked={role === "publisher"}
                          value="publisher"
                          onChange={e => onChange(e)}
                        />
                        <label class="form-check-label">
                          Bootcamp Publisher
                        </label>
                      </div>
                    </div>
                    <p className="text-danger">
                      * You must be affiliated with the bootcamp in some way in
                      order to add it to DevCamper.
                    </p>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Register"
                        className="btn btn-primary btn-block"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isToken: state.auth.token
});

export default connect(mapStateToProps, { setAlert, register })(Register);
