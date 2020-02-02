import React, { useState } from "react";
import { connect } from "react-redux";
import { getUserBootcampSelectors } from "../../reducers/selectors";
import { addCourse } from "../../actions/courses";

const AddCourse = ({ bootcamp, history, addCourse, userBootcamp }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    weeks: null,
    tuition: null,
    minimumSkill: "",
    scholarShipsAvailable: false
  });

  const {
    title,
    description,
    weeks,
    tuition,
    minimumSkill,
    scholarShipsAvailable
  } = formData;
  console.log(userBootcamp);

  const publisherBootcamp = userBootcamp[0];
  console.log(publisherBootcamp);
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // console.log(name);
  const onSubmit = e => {
    e.preventDefault();
    const { _id } = publisherBootcamp;
    addCourse(_id, formData, history);
    console.log(formData);
  };
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="card bg-white py-2 px-4">
            <div className="card-body">
              <a
                href="manage-courses.html"
                className="btn btn-link text-secondary my-3"
              >
                <i className="fas fa-chevron-left"></i> Manage Courses
              </a>
              <h1 className="mb-2">DevWorks Bootcamp</h1>
              <h3 className="text-primary mb-4">Add Course</h3>
              <form action="manage-bootcamp.html" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <label>Course Title</label>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="number"
                    name="weeks"
                    value={weeks}
                    onChange={e => onChange(e)}
                    placeholder="Duration"
                    className="form-control"
                  />
                  <small className="form-text text-muted">
                    Enter number of weeks course lasts
                  </small>
                </div>
                <div className="form-group">
                  <label>Course Tuition</label>
                  <input
                    type="number"
                    name="tuition"
                    value={tuition}
                    onChange={e => onChange(e)}
                    placeholder="Tuition"
                    className="form-control"
                  />
                  <small className="form-text text-muted">USD Currency</small>
                </div>
                <div className="form-group">
                  <label>Minimum Skill Required</label>
                  <select
                    value={minimumSkill}
                    onChange={e => onChange(e)}
                    name="minimumSkill"
                    className="form-control"
                  >
                    <option>Choose a difficulty level</option>
                    <option value="beginner">Beginner (Any)</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    rows="5"
                    value={description}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Course description summary"
                    maxlength="500"
                  ></textarea>
                  <small className="form-text text-muted">
                    No more than 500 characters
                  </small>
                </div>
                <div className="form-check">
                  <input
                    checked={scholarShipsAvailable}
                    className="form-check-input"
                    type="checkbox"
                    name="scholarShipsAvailable"
                    id="scholarshipAvailable"
                    onChange={() =>
                      setFormData({
                        ...formData,
                        scholarShipsAvailable: !scholarShipsAvailable
                      })
                    }
                  />
                  <label
                    className="form-check-label"
                    for="scholarshipAvailable"
                  >
                    Scholarship Available
                  </label>
                </div>
                <div className="form-group mt-4">
                  <input
                    type="submit"
                    value="Add Course"
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

const mapStateToProps = state => ({
  bootcamp: state.bootcamps.bootcamp,
  userBootcamp: getUserBootcampSelectors(state)
});

export default connect(mapStateToProps, { addCourse })(AddCourse);
