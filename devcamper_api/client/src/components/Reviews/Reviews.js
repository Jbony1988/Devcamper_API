import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import Spinner from "../Spinner/Spinner";
import { getReviews } from "../../actions/reviews";
import { getBootcampbyID } from "../../actions/bootcamp";
import store from "../../store";

const Reviews = ({ match, reviews, loading, bootcamp: { _id, name } }) => {
  useEffect(() => {
    store.dispatch(getReviews(match.params.id));
    store.dispatch(getBootcampbyID(match.params.id));
  }, [getReviews, getBootcampbyID, match]);

  console.log(reviews);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {reviews.map(review => (
            <ReviewItem
              name={name}
              rating={review.rating}
              text={review.text}
              title={review.title}
            />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  loading: state.reviews.loading,
  bootcamp: state.bootcamps.bootcamp
});

export default connect(mapStateToProps, { getReviews })(Reviews);
