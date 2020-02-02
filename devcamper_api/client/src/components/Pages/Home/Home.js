import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getBootcampsByRadius } from "../../../actions/bootcamp";

const Home = ({ getBootcampsByRadius }) => {
  const [formData, setFormData] = useState({
    distance: "",
    zipcode: ""
  });

  const [findBootCampsWithRadius, setRadius] = useState(false);

  const { distance, zipcode } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // const radius = {
    //   miles,
    //   zipcode
    // };
    getBootcampsByRadius(zipcode, distance);
    setRadius(true);
  };

  // const coordinates = {
  //   miles,
  //   zipcode
  // };
  console.log(distance, zipcode);
  if (findBootCampsWithRadius === true) {
    return (
      <Redirect
        to={{
          pathname: "/bootcamps",
          params: { distance: distance, zipcode: zipcode }
        }}
      />
    );
  }

  return (
    <Fragment>
      <section className="showcase">
        <div className="dark-overlay">
          <div className="showcase-inner container">
            <h1 className="display-4">Find a Code Bootcamp</h1>
            <p className="lead">
              Find, rate and read reviews on coding bootcamps
            </p>
            <form action="bootcamps.html" onSubmit={e => onSubmit(e)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="distance"
                      value={distance}
                      placeholder="Miles From"
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="zipcode"
                      value={zipcode}
                      placeholder="Enter Zipcode"
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
              </div>
              <Link
                className="btn btn-primary btn-block"
                to={`/bootcamps/radius/${zipcode}/${distance}`}
              >
                Find Bootcamps
              </Link>
              {/* <input
                type="submit"
                value="Find Bootcamps"
                className="btn btn-primary btn-block"
              /> */}
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default connect(null, { getBootcampsByRadius })(Home);
