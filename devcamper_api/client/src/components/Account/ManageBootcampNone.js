import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const ManageBootcampNone = ({ isAuthenticated }) => {
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <Fragment>
      <section class="container mt-5">
        <div class="row">
          <div class="col-md-8 m-auto">
            <div class="card bg-white py-2 px-4">
              <div class="card-body">
                <h1 class="mb-2">Manage Bootcamp</h1>
                <p class="lead">You have not yet added a bootcamp</p>
                <a href="add-bootcamp.html" class="btn btn-primary btn-block">
                  Add Bootcamp
                </a>
                <p class="text-muted mt-5">
                  * You can only add one bootcamp per account.
                </p>
                <p class="text-muted">
                  * You must be affiliated with the bootcamp in some way in
                  order to add it to DevCamper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

ManageBootcampNone.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ManageBootcampNone);
