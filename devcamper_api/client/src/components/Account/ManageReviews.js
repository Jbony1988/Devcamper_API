import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getBootcamps, getReviews } from "../../reducers/userSelectors";
import { getBootcampbyID } from "../../actions/bootcamp";
import { getReview } from "../../actions/reviews";
import PropTypes from "prop-types";

const ManageReviews = ({
  user,

  bootcamps,

  getReview,
  getBootcampbyID,
  userReviews
}) => {
  console.log(bootcamps, user);
  const { _id } = user;

  return (
    <Fragment>
      <section class="container mt-5">
        <div class="row">
          <div class="col-md-8 m-auto">
            <div class="card bg-white py-2 px-4">
              <div class="card-body">
                <h1 class="mb-4">Manage Reviews</h1>

                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Bootcamp</th>
                      <th scope="col">Rating</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {bootcamps.map((b, i, r) => {
                      return (
                        <Fragment key={i}>
                          {b.reviews.map((r, i) => {
                            return (
                              <tr key={i}>
                                <td>{r.user === _id && b.name}</td>
                                <td>{r.user === _id && b.averageRating}</td>
                                {r.user === _id && (
                                  <td>
                                    <a
                                      href="add-review.html"
                                      class="btn btn-secondary"
                                    >
                                      <i class="fas fa-pencil-alt"></i>
                                    </a>
                                    <button class="btn btn-danger">
                                      <i class="fas fa-times"></i>
                                    </button>
                                  </td>
                                )}
                              </tr>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

ManageReviews.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  reviews: state.reviews.reviews,
  userBootcamp: getBootcamps(state),
  userReviews: getReviews(state),
  bootcamps: state.bootcamps.bootcamps
});

export default connect(mapStateToProps, { getBootcampbyID, getReview })(
  ManageReviews
);
