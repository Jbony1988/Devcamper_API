import React, { Fragment, useEffect, useState } from "react";
import { createBootcamp } from "../../actions/bootcamp";
import { getBootcampbyID, updateBootcamp } from "../../actions/bootcamp";
import store from "../../store";
import { connect } from "react-redux";

const CreateBootcamp = ({
  createBootcamp
  // match,
  // bootcamp: {
  // name,
  // phone,
  // email,
  // website,
  // description,
  // housing,
  // jobAssistance,
  // jobGuarantee,
  // acceptGi,
  // location: { formattedAddress } = {}
  // }
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    phone: "",
    email: "",
    address: "",
    careers: ""
  });

  const {
    name,
    phone,
    description,
    email,
    website,
    careers,
    address
  } = formData;

  // useEffect(() => {
  //   store.dispatch(createBootcamp(formData));
  // }, [createBootcamp]);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createBootcamp(formData);
    // console.log(name, phone, description, email, website, careers, address);
  };
  // console.log("publishers bootcamp", formattedAddress);

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
                    <input
                      type="text"
                      name="careers"
                      value={careers}
                      onChange={e => onChange(e)}
                      class="form-control"
                      placeholder="careers"
                    />
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="housing"
                      id="housing"
                      // checked={housing}
                    />
                    <label class="form-check-label" for="housing">
                      Housing
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      // checked={jobAssistance}
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
                      // checked={jobGuarantee}
                      name="jobGuarantee"
                      id="jobGuarantee"
                    />
                    <label class="form-check-label" for="jobGuarantee">
                      Job Guarantee
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      // checked={acceptGi}
                      class="form-check-input"
                      type="checkbox"
                      name="acceptGi"
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
  bootcamp: state.bootcamps.bootcamp
});

export default connect(mapStateToProps, { createBootcamp })(CreateBootcamp);
