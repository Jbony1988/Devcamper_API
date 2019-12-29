import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getBootcampbyID } from "../../actions/bootcamp";
import { connect } from "react-redux";

const Bootcamp = ({ bootcamp: { _id, name, careers, photo } }) => {
  // useEffect(() => {
  //   getBootcampbyID(match.params.id);
  // }, [getBootcampbyID, match]);

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`http://localhost:5000/uploads/${photo}`}
            className="card-img"
            alt="..."
          />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/bootcamp/${_id}`}>
                {name}
                <span className="float-right badge badge-success">8.8</span>
              </Link>
            </h5>
            <span className="badge badge-dark mb-2">Boston, MA</span>

            <p className="card-text">{careers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
