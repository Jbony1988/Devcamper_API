import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = ({ name, title, text, rating }) => {
  return (
    <section class="bootcamp mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <Link to="/bootcamps" class="btn btn-secondary my-3">
              <i class="fas fa-chevron-left"></i> Bootcamp Info
            </Link>
            {/* <a
              href="bootcamp.html"
       
              class="btn btn-secondary my-3"
            >

            </a> */}
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
            <h1 class="text-center my-4">
              <span class="badge badge-secondary badge-success rounded-circle p-3">
                8.8
              </span>
              Rating
            </h1>

            <a href="add-review.html" class="btn btn-primary btn-block my-3">
              <i class="fas fa-pencil-alt"></i> Review This Bootcamp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewItem;
