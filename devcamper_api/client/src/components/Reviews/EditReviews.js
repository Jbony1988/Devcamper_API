import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editReview } from "../../actions/reviews";
import { getBootcampReviewsSelector } from "../../reducers/selectors";

const EditReviews = ({ reviews, loading, history, editReview, user }) => {
  const [formData, setFormData] = useState({
    rating: "",
    title: "",
    text: ""
  });

  console.log("this is a review", reviews);

  const userReview = reviews.filter(r => r.user === user._id);
  const bootcampReview = userReview[0];
  console.log(bootcampReview, "this is an object");

  useEffect(() => {
    setFormData({
      rating: loading || !bootcampReview.rating ? "" : bootcampReview.rating,
      title: loading || !bootcampReview.title ? "" : bootcampReview.title,
      text: loading || !bootcampReview.text ? "" : bootcampReview.text
    });
  }, [reviews]);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleChange = e => {
    setFormData({ ...formData, rating: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { _id } = bootcampReview;
    editReview(_id, formData, history);
  };

  const { rating, title, text } = formData;

  console.log(rating, title, text);

  return (
    <section class="container mt-5">
      <div class="row">
        <div class="col-md-8 m-auto">
          <div class="card bg-white py-2 px-4">
            <div class="card-body">
              <a
                href="bootcamp.html"
                className="btn btn-link text-secondary my-3"
              >
                <i class="fas fa-chevron-left"></i> Bootcamp Info
              </a>
              <h1 class="mb-2">DevWorks Bootcamp</h1>
              <h3 class="text-primary mb-4">Write a Review</h3>
              <p>
                You must have attended and graduated this bootcamp to review
              </p>
              <form onSubmit={e => onSubmit(e)}>
                <div class="form-group">
                  <label for="rating">
                    Rating: <span class="text-primary">{rating}</span>
                  </label>
                  <input
                    type="range"
                    className="custom-range"
                    min="1"
                    max="10"
                    step="1"
                    onChange={handleChange}
                    value={rating}
                    id="rating"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Review title"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="text"
                    rows="10"
                    className="form-control"
                    onChange={e => onChange(e)}
                    value={text}
                    placeholder="Your review"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Submit Review"
                    class="btn btn-dark btn-block"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  bootcamp: state.bootcamps.bootcamp,
  reviews: state.reviews.reviews,
  loading: state.reviews.loading,
  user: state.auth.user

  // review: getBootcampReviewsSelector(state)
});

export default connect(mapStateToProps, { editReview })(EditReviews);
