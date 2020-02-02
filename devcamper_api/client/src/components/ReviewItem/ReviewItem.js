import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../reducers/userSelectors";
import { connect } from "react-redux";

const ReviewItem = ({
  //  reviewId,
  name,
  title,
  text,
  rating,
  reviews,
  user,
  index
}) => {
  const userReview = reviews.filter(r => r.user === user._id);
  console.log(userReview);
  const userReviewObject = userReview[0];

  const { _id } = userReviewObject;
  return (
    <section class="bootcamp mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <Link to="/bootcamps" class="btn btn-secondary my-3">
              <i class="fas fa-chevron-left"></i> Bootcamp Info
            </Link>

            <h1 class="mb-4">{`${name}  Reviews `}</h1>
            <div class="card mb-3">
              <h5 class="card-header bg-dark text-white">{title}</h5>
              <div class="card-body">
                <h5 class="card-title">
                  Rating: <span class="text-success">{rating}</span>
                </h5>
                <p class="card-text">{text}</p>
                <p class="text-muted">Writtern By Kevin Smith</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <Fragment>
              {index === 0 && (
                <h1 class="text-center my-4">
                  <span class="badge badge-secondary badge-success rounded-circle p-3">
                    8.8
                  </span>
                  Rating
                </h1>
              )}
            </Fragment>

            {index === 0 && (
              <Link
                to={`/edit-review/${_id}`}
                className="btn btn-primary btn-block my-3"
              >
                <i className="fas fa-pencil-alt"></i>{" "}
                {!userReview ? `Review This Bootcamp` : "Edit review"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  user: getUser(state)
});

export default connect(mapStateToProps)(ReviewItem);
