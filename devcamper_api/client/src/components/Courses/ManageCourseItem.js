import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getCourses } from "../../actions/courses";
import { getUserBootcampSelectors } from "../../reducers/selectors";
import { Link } from "react-router-dom";

const ManageCourseItem = ({
  userBootcamp,
  getBootcamps,
  getCourses,
  bootcampCourses,
  // bootcamp: { _id, name, careers, photo, location: { city, state } = {} },
  courses
}) => {
  console.log(userBootcamp, "userbootcamp");
  const publisherBootcamp = userBootcamp[0];

  const {
    // courses,
    _id,
    name,
    careers,
    photo,
    location: { city, state } = {}
  } = publisherBootcamp;
  // useEffect(() => {
  //   getCourses(_id);
  // }, [getCourses]);

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="card bg-white py-2 px-4">
            <div className="card-body">
              <Link
                to="/manage-bootcamp"
                className="btn btn-link text-secondary my-3"
              >
                <i className="fas fa-chevron-left"></i> Manage Bootcamp
              </Link>
              <h1 className="mb-4">Manage Courses</h1>
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
                          <span className="float-right badge badge-success">
                            4.9
                          </span>
                        </a>
                      </h5>
                      <span className="badge badge-dark mb-2">
                        {city}, {state}
                      </span>
                      <div style={{ display: "flex" }}>
                        <p className="card-text">{careers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to={`/add-course/${_id}`}
                className="btn btn-primary btn-block mb-4"
              >
                Add Bootcamp Course
              </Link>

              <Fragment>
                {bootcampCourses.length === 0 ? (
                  "You have not added any courses for this bootcamp"
                ) : (
                  <Fragment>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {bootcampCourses.map(course => (
                          <tr key={course._id}>
                            <td>{course.title}</td>
                            <td>
                              <a
                                href="add-course.html"
                                className="btn btn-secondary"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <button className="btn btn-danger">
                                <i className="fas fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Fragment>
                )}
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  userBootcamp: getUserBootcampSelectors(state),
  bootcampCourses: state.courses.courses
});

export default connect(mapStateToProps, { getCourses })(ManageCourseItem);
