import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { resetPassword } from "../../actions/auth";

const UpdatePassword = ({ match, setAlert, resetPassword }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    password: "",
    password2: ""
  });

  const { password, password2, currentPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    const { resetToken } = match.params;
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      const newPassword = {
        password
      };
      resetPassword(resetToken, newPassword);
      console.log(resetToken, newPassword);
    }
  };

  console.log(match.params.resetToken);
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="card bg-white py-2 px-4">
            <div className="card-body">
              <h1 className="mb-2">Update Password</h1>
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={currentPassword}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Current Password"
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="New Password"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Confirm New Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update Password"
                    className="btn btn-dark btn-block"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(null, { setAlert, resetPassword })(UpdatePassword);
