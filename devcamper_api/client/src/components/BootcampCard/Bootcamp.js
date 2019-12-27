import React, { useEffect } from "react";
import Career from "../Careers/Careers";

const Bootcamp = ({ bootcamp: { name, careers, photo } }) => {
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
              <a href="bootcamp.html">
                {name}
                <span className="float-right badge badge-success">8.8</span>
              </a>
            </h5>
            <span className="badge badge-dark mb-2">Boston, MA</span>

            <p className="card-text">{careers}</p>

            {/* {careers.map((career, i) => (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Career key={i} career={career} />
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
