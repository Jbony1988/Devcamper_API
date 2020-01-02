import React, { useState } from "react";
import { connect } from "react-redux";
import { createBootcamp } from "../../actions/bootcamp";

const CreateBootcamp = ({ createBootcamp }) => {
  const [formData, setFormData] = useState({
    name: "jb bootcamp",
    description: "my bootcamp",
    website: "https://expediencehvac.com/",
    phone: "7736807355",
    email: "info@platowdesigns.com",
    address: "8602 s euclid avenue, Chicago, IL 60617",
    careers: "Web development",
    housing: false,
    jobAssistance: false,
    jobGurantee: false,
    acceptGi: false
  });

  const {
    name,
    description,
    website,
    phone,
    email,
    address,
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
    console.log(formData);
    createBootcamp(formData);
  };

  return (
    <section className="container mt-5">
      <h1 className="mb-2">Add Bootcamp</h1>
      <p>
        Important: You must be affiliated with a bootcamp to add to DevCamper
      </p>
      <form onSubmit={e => onSubmit(e)}>
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-white py-2 px-4">
              <div className="card-body">
                <h3>Location & Contact</h3>
                <p className="text-muted">
                  If multiple locations, use the main or largest
                </p>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Bootcamp Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Full Address"
                    required
                  />
                  <small className="form-text text-muted">
                    Street, city, state, etc
                  </small>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Contact Email"
                  />
                </div>
                <div className="form-group">
                  <label>Website</label>
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Website URL"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-white py-2 px-4">
              <div className="card-body">
                <h3>Other Info</h3>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    rows="5"
                    className="form-control"
                    value={description}
                    onChange={e => onChange(e)}
                    placeholder="Description (What you offer, etc)"
                    maxlength="500"
                  ></textarea>
                  <small className="form-text text-muted">
                    No more than 500 characters
                  </small>
                </div>
                <div className="form-group">
                  <label>Careers</label>
                  <select
                    name="careers"
                    value={careers}
                    onChange={e => onChange(e)}
                    className="custom-select"
                    multiple
                  >
                    <option selected={careers}>Select all that apply</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">
                      Mobile Development
                    </option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-check">
                  <input
                    checked={housing}
                    className="form-check-input"
                    type="checkbox"
                    name="housing"
                    value={housing}
                    onChange={e => onChange(e)}
                    id="housing"
                  />
                  <label className="form-check-label" for="housing">
                    Housing
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="jobAssistance"
                    value={jobAssistance}
                    onChange={e => onChange(e)}
                    id="jobAssistance"
                  />
                  <label className="form-check-label" for="jobAssistance">
                    Job Assistance
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="jobGuarantee"
                    value={jobGuarantee}
                    onChange={e => onChange(e)}
                    id="jobGuarantee"
                  />
                  <label className="form-check-label" for="jobGuarantee">
                    Job Guarantee
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="acceptGi"
                    value={acceptGi}
                    onChange={e => onChange(e)}
                    id="acceptGi"
                  />
                  <label className="form-check-label" for="acceptGi">
                    Accepts GI Bill
                  </label>
                </div>
                <p className="text-muted my-4">
                  *After you add the bootcamp, you can add the specific courses
                  offered
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Submit Bootcamp"
            className="btn btn-success btn-block my-4"
          />
          <a
            href="manage-bootcamp.html"
            className="btn btn-danger btn-block mb-4"
          >
            Cancel
          </a>
        </div>
      </form>
    </section>
  );
};

export default connect(null, { createBootcamp })(CreateBootcamp);
