import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import store from "../../store";
import { loadUser } from "../../actions/auth";
import PropTypes from "prop-types";

const ManageAccount = ({ user: { name, email } }) => {
  useEffect(() => {
    store.dispatch(loadUser());
    // console.log(user);
  }, []);

  return (
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
  );
};

ManageAccount.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ManageAccount);
