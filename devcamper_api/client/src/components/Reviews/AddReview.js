import React, { useState } from "react";
import { connect } from "react-redux";
import { addReviews } from "../../actions/reviews";

const AddReview = ({ addReviews, match, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    rating: ""
  });

  const { title, text, rating } = formData;

  const handleChange = e => {
    setFormData({ ...formData, rating: e.target.value });
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addReviews(match.params.id, formData, history);
  };

  console.log("this is a rating", rating);

  return (
    <section class="container mt-5">
      <div class="row">
        <div class="col-md-8 m-auto">
          <div class="card bg-white py-2 px-4">
            <div class="card-body">
              <a href="bootcamp.html" class="btn btn-link text-secondary my-3">
                <i class="fas fa-chevron-left"></i> Bootcamp Info
              </a>
              <h1 class="mb-2">DevWorks Bootcamp</h1>
              <h3 class="text-primary mb-4">Write a Review</h3>
              <p>
                You must have attended and graduated this bootcamp to review
              </p>
              <form onSubmit={onSubmit}>
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

export default connect(null, { addReviews })(AddReview);
