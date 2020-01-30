import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import ReviewItemNone from "../../components/ReviewItem/ReviewItemNone";
import Spinner from "../Spinner/Spinner";
import { getReviews } from "../../actions/reviews";
import { getBootcampbyID } from "../../actions/bootcamp";
import store from "../../store";

const Reviews = ({
  match,
  reviews,
  loading,
  bootcamp: { _id, name },
  user
}) => {
  useEffect(() => {
    store.dispatch(getReviews(match.params.id));
    store.dispatch(getBootcampbyID(match.params.id));
  }, [match]);

  console.log(reviews);

  const userReview = reviews.filter(r => r.user === user._id);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {reviews.length === 0 ? (
            <ReviewItemNone name={name} />
          ) : (
            <Fragment>
              {reviews.map((review, i) => (
                <ReviewItem
                  key={review._id}
                  index={i}
                  // reviewId={review._id}
                  name={name}
                  rating={review.rating}
                  text={review.text}
                  title={review.title}
                />
              ))}
            </Fragment>
          )}

          {/* <Link
            to={`/edit-review/${_id}`}
            className="btn btn-primary btn-block my-3"
          >
            <i className="fas fa-pencil-alt"></i>{" "}
            {!userReview ? `Review This Bootcamp` : "Edit review"}
          </Link> */}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  loading: state.reviews.loading,
  bootcamp: state.bootcamps.bootcamp,
  user: state.auth.user
});

export default connect(mapStateToProps, { getReviews })(Reviews);
