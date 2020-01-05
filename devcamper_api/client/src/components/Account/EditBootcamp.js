import React, { Fragment, useEffect, useState } from "react";
import {
  getBootcampbyID,
  updateBootcamp,
  createBootcamp
} from "../../actions/bootcamp";
import { bootcamp } from "../../reducers/bootcamps";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const EditBootcamp = ({
  match,
  loading,
  history,
  bootcamp,
  createBootcamp,
  isAuthenticated,
  getBootcampbyID,
  updateBootcamp
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    phone: "",
    email: "",
    address: "",
    careers: [],
    housing: false,
    jobAssistance: false,
    jobGurantee: false,
    acceptGi: false
  });

  const { location: { formattedAddress } = {}, _id } = bootcamp;

  useEffect(() => {
    getBootcampbyID(match.params.id);

    setFormData({
      name: loading || !bootcamp.name ? "" : bootcamp.name,
      description: loading || !bootcamp.description ? "" : bootcamp.description,
      website: loading || !bootcamp.website ? "" : bootcamp.website,
      phone: loading || !bootcamp.phone ? "" : bootcamp.phone,
      email: loading || !bootcamp.email ? "" : bootcamp.email,
      address: loading || !formattedAddress ? "" : formattedAddress,
      careers: loading || !bootcamp.careers ? "" : bootcamp.careers,
      housing: loading || !bootcamp.housing ? null : bootcamp.housing,
      jobAssistance:
        loading || !bootcamp.jobAssistance ? null : bootcamp.jobAssistance,
      jobGurantee:
        loading || !bootcamp.jobGurantee ? null : bootcamp.jobGurantee,
      acceptGi: loading || !bootcamp.acceptGi ? null : bootcamp.acceptGi
    });
  }, [
    getBootcampbyID,
    loading,
    // formattedAddress,
    // bootcamp.acceptGi,
    // bootcamp.address,
    // bootcamp.careers,
    // bootcamp.description,
    // bootcamp.email,
    // bootcamp.housing,
    // bootcamp.jobAssistance,
    // bootcamp.jobGurantee,
    // bootcamp.name,
    // bootcamp.phone,
    // bootcamp.website,
    match.params.id
  ]);

  const {
    name,
    description,
    website,
    phone,
    address,
    email,
    careers,
    housing,
    jobAssistance,
    jobGuarantee,
    acceptGi
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    updateBootcamp(match.params.id, formData, history);
    // updateBootcamp(match.params.id, formData);
  };

  const handleChange = e => {
    const options = e.target.options;

    //  Store course offerings in array
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        careers.push(options[i].value);
      }
    }
    console.log(careers);
  };
  // Redirect if logged in
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <section class="container mt-5">
        <h1 class="mb-2">Add Bootcamp</h1>
        <p>
          Important: You must be affiliated with a bootcamp to add to DevCamper
        </p>
        <form action="manage-bootcamp.html" onSubmit={e => onSubmit(e)}>
          <div class="row">
            <div class="col-md-6">
              <div class="card bg-white py-2 px-4">
                <div class="card-body">
                  <h3>Location & Contact</h3>
                  <p class="text-muted">
                    If multiple locations, use the main or largest
                  </p>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={e => onChange(e)}
                      class="form-control"
                      placeholder="Bootcamp Name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={e => onChange(e)}
                      class="form-control"
                      placeholder="Full Address"
                      required
                    />
                    <small class="form-text text-muted">
                      Street, city, state, etc
                    </small>
                  </div>
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      onChange={e => onChange(e)}
                      value={phone}
                      class="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      class="form-control"
                      placeholder="Contact Email"
                    />
                  </div>
                  <div class="form-group">
                    <label>Website</label>
                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={e => onChange(e)}
                      class="form-control"
                      placeholder="Website URL"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card bg-white py-2 px-4">
                <div class="card-body">
                  <h3>Other Info</h3>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea
                      name="description"
                      rows="5"
                      value={description}
                      onChange={e => onChange(e)}
                      class="form-control"
                      placeholder="Description (What you offer, etc)"
                      maxlength="500"
                    ></textarea>
                    <small class="form-text text-muted">
                      No more than 500 characters
                    </small>
                  </div>
                  <div class="form-group">
                    <label>Careers</label>
                    <select
                      name="careers"
                      value={careers}
                      multiple={true}
                      onChange={handleChange}
                      className="custom-select"
                    >
                      <option>Select all that apply</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Development">
                        Mobile Development
                      </option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Business">Business</option>
                      <option value="Other">Other</option>
                    </select>
                    {/* <input
                      type="text"
                      name="careers"
                      value={careers}
                      onChange={e => onChange(e)}
                      class="form-control"
                      placeholder="careers"
                    /> */}
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="housing"
                      id="housing"
                      checked={housing}
                      onChange={() =>
                        setFormData({ ...formData, housing: !housing })
                      }
                    />
                    <label class="form-check-label" for="housing">
                      Housing
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={jobAssistance}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          jobAssistance: !jobAssistance
                        })
                      }
                      name="jobAssistance"
                      id="jobAssistance"
                    />
                    <label class="form-check-label" for="jobAssistance">
                      Job Assistance
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={jobGuarantee}
                      onChange={() =>
                        setFormData({ ...formData, jobGurantee: !jobGuarantee })
                      }
                      name="jobGuarantee"
                      id="jobGuarantee"
                    />
                    <label class="form-check-label" for="jobGuarantee">
                      Job Guarantee
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      checked={acceptGi}
                      class="form-check-input"
                      type="checkbox"
                      name="acceptGi"
                      onChange={() =>
                        setFormData({ ...formData, acceptGi: !acceptGi })
                      }
                      id="acceptGi"
                    />
                    <label class="form-check-label" for="acceptGi">
                      Accepts GI Bill
                    </label>
                  </div>
                  <p class="text-muted my-4">
                    *After you add the bootcamp, you can add the specific
                    courses offered
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <input
              type="submit"
              value="Submit Bootcamp"
              class="btn btn-success btn-block my-4"
            />
            <a
              href="manage-bootcamp.html"
              class="btn btn-danger btn-block mb-4"
            >
              Cancel
            </a>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  bootcamp: state.bootcamps.bootcamp,
  loading: state.bootcamps.loading,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  getBootcampbyID,
  updateBootcamp,
  createBootcamp
})(EditBootcamp);
