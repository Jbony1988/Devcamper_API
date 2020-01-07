import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    miles: "",
    zipcode: ""
  });

  const [findBootCampsWithRadius, setRadius] = useState(false);

  const { miles, zipcode } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const radius = {
      miles,
      zipcode
    };

    setRadius(true);

    console.log(miles, zipcode);
  };

  const coordinates = {
    miles,
    zipcode
  };
  // if (findBootCampsWithRadius === true) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/bootcamps",
  //         params: { miles: miles, zipcode: zipcode }
  //       }}
  //     />
  //   );
  // }

  return (
    <Fragment>
      <section className="showcase">
        <div className="dark-overlay">
          <div className="showcase-inner container">
            <h1 className="display-4">Find a Code Bootcamp</h1>
            <p className="lead">
              Find, rate and read reviews on coding bootcamps
            </p>
            <form action="bootcamps.html">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="miles"
                      value={miles}
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
                to={`/bootcamps/radius/${zipcode}/${miles}`}
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
export default Home;
