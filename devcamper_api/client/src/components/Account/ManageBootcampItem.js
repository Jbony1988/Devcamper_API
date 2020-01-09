import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { uploadBootcampPhoto, getBootcampbyID } from "../../actions/bootcamp";
import { connect } from "react-redux";

const ManageBootcampItem = ({
  isAuthenticated,
  getBootcampbyID,
  match,
  bootcamps,
  user,
  uploadBootcampPhoto,
  loading
  // bootcamp: { _id, name, photo, averageRating, careers }
}) => {
  // const [formData, setFormData] = useState({
  //   files: null
  // });

  const userBootcamp = bootcamps.filter(b => b.user === user._id);
  const publishersBootcamp = userBootcamp[0];
  console.log(publishersBootcamp);
  const { _id, name, photo, averageRating, careers } = publishersBootcamp;

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("choose file");
  const [uploadedFile, setUploadedFile] = useState({});

  // const { files } = formData;

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(file);
    // const files = e.target.files;
    // console.log(files);
    // const filesArr = Array.prototype.slice.call(files);
    // const
    // console.log("files array", filesArr);
    // const fileObject = filesArr[0];
    // const { name } = fileObject;
    // setFormData({ ...formData, files: files });
  };

  // console.log(files);
  useEffect(() => {
    getBootcampbyID(_id);
    setFile({
      file: loading || photo ? null : photo
    });
  }, [setFile]);

  const onSubmit = e => {
    // const { _id } = publishersBootcamp;
    e.preventDefault();
    const formData = new FormData();
    // formData.set("file", file);
    // console.log(file, _id, formData);
    // console.log(formData.entries());
    uploadBootcampPhoto(_id, file);
  };

  // console.log(name, "bootcamp name");
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <section class="container mt-5">
        <div class="row">
          <div class="col-md-8 m-auto">
            <div class="card bg-white py-2 px-4">
              <div class="card-body">
                <h1 class="mb-4">Manage Bootcamp</h1>
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img
                        src={`http://localhost:5000/uploads/${photo}`}
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">
                          <a href="bootcamp.html">
                            {name}
                            <span class="float-right badge badge-success">
                              {averageRating ? "Not Rated" : averageRating}
                            </span>
                          </a>
                        </h5>
                        <span class="badge badge-dark mb-2">Boston, MA</span>
                        <p class="card-text">{careers}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <form class="mb-4" onSubmit={onSubmit}>
                  <div class="form-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        name="file"
                        // value={file}
                        onChange={onChange}
                        className="custom-file-input"
                        id="photo"
                      />
                      <label class="custom-file-label" for="photo">
                        {fileName}
                      </label>
                    </div>
                  </div>
                  <input
                    type="submit"
                    class="btn btn-light btn-block"
                    value="Upload Image"
                  />
                </form>
                <Link
                  to={`/edit-bootcamp/${_id}`}
                  className="btn btn-primary btn-block"
                >
                  Edit Bootcamp Details
                </Link>

                <Link
                  to={{
                    pathname: "/manage-courses",
                    state: {
                      bootcampId: _id
                    }
                  }}
                  className="btn btn-secondary btn-block"
                >
                  Manage Courses
                </Link>
                <Link class="btn btn-danger btn-block">Remove Bootcamp</Link>
                <p class="text-muted mt-5">
                  * You can only add one bootcamp per account.
                </p>
                <p class="text-muted">
                  * You must be affiliated with the bootcamp in some way in
                  order to add it to DevCamper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  loading: state.auth.loading,
  bootcamps: state.bootcamps.bootcamps
});

export default connect(mapStateToProps, {
  uploadBootcampPhoto,
  getBootcampbyID
})(ManageBootcampItem);
