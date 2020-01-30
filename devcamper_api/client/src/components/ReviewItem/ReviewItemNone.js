import React from "react";
import { Link } from "react-router-dom";

const ReviewItemNone = ({ name }) => {
  return (
    <section class="bootcamp mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <Link to="/bootcamps" class="btn btn-secondary my-3">
              <i class="fas fa-chevron-left"></i> Bootcamp Info
            </Link>

            <h2 class="mb-4">{`${name} has not been reviewed yet`}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewItemNone;
