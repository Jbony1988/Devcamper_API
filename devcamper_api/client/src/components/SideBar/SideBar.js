import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const SideBar = ({
  _id,
  rating,
  website,
  housing,
  jobAssistance,
  jobGuarantee,
  acceptGi
}) => {
  return (
    <div className="col-md-4">
      <img src="img/image_1.jpg" className="img-thumbnail" alt="" />

      <h1 className="text-center my-4">
        <span className="badge badge-secondary badge-success rounded-circle p-3">
          {rating && rating}
        </span>{" "}
        {rating ? "Rating" : "Not Rated"}
      </h1>
      {/* <!-- Buttons --> */}
      <Link
        to={`/bootcamp/${_id}/reviews`}
        className="btn btn-dark btn-block my-3"
      >
        <i className="fas fa-comments"></i> Read Reviews
      </Link>
      {/* <a href="reviews.html" >

      </a> */}
      <a href="add-review.html" className="btn btn-light btn-block my-3">
        <i className="fas fa-pencil-alt"></i> Write a Review
      </a>
      <a
        href={`${website}`}
        target="_blank"
        className="btn btn-secondary btn-block my-3"
      >
        <i className="fas fa-globe"></i> Visit Website
      </a>
      {/* <!-- Map --> */}
      <div id="map" style={{ width: "100%", height: 300 }}></div>
      {/* <!-- Perks --> */}
      <ul className="list-group list-group-flush" className="mt-4">
        <Fragment>
          {!housing ? (
            <li className="list-group-item">
              <i className="fas fa-times text-danger"></i> Housing
            </li>
          ) : (
            <li className="list-group-item">
              <i className="fas fa-check text-success"></i> Housing
            </li>
          )}
        </Fragment>

        <Fragment>
          {!jobAssistance ? (
            <li className="list-group-item">
              <i className="fas fa-times text-danger"></i> Job Assistance
            </li>
          ) : (
            <li className="list-group-item">
              <i className="fas fa-check text-success"></i> Job Assistance
            </li>
          )}
        </Fragment>

        <Fragment>
          {!jobGuarantee ? (
            <li className="list-group-item">
              <i className="fas fa-times text-danger"></i> Job Guarantee
            </li>
          ) : (
            <li className="list-group-item">
              <i className="fas fa-check text-success"></i> Job Guarantee
            </li>
          )}
        </Fragment>

        <Fragment>
          {!acceptGi ? (
            <li className="list-group-item">
              <i className="fas fa-check text-danger"></i> Accepts GI Bill
            </li>
          ) : (
            <li className="list-group-item">
              <i className="fas fa-check text-success"></i> Accepts GI Bill
            </li>
          )}
        </Fragment>
      </ul>
    </div>
  );
};

export default SideBar;
