import React, { Fragment, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { getUser } from "../../reducers/userSelectors";
import store from "../../store";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";

const ManageAccount = ({ user, isAuthenticated, loading, loggedUser }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  // Redirect if logged in
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  console.log(loggedUser);
  const { name, email } = loggedUser;

  // const { name, email } = user;

  return (
    <Fragment>
      {loading && !isAuthenticated && !user ? (
        <Spinner />
      ) : (
        <Fragment>
          <section class="container mt-5">
            <div class="row">
              <div class="col-md-8 m-auto">
                <div class="card bg-white py-2 px-4">
                  <div class="card-body">
                    <h1 class="mb-2">Manage Account</h1>
                    <form>
                      <div class="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          name="title"
                          class="form-control"
                          placeholder="Name"
                          value={name}
                        />
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Email"
                          value={email}
                        />
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-md-6">
                            <input
                              type="submit"
                              value="Save"
                              class="btn btn-success btn-block"
                            />
                          </div>
                          <div class="col-md-6">
                            <a
                              href="update-password.html"
                              class="btn btn-secondary btn-block"
                            >
                              Update Password
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

ManageAccount.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  loggedUser: getUser(state)
});

export default connect(mapStateToProps)(ManageAccount);
