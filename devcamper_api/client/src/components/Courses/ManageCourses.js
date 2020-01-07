import React, { Fragment, useState, useEffect } from "react";
import ManageCourseItem from "./ManageCourseItem";
import { getCourses } from "../../actions/courses";
import { getBootcampbyID } from "../../actions/bootcamp";
import Spinner from "../Spinner/Spinner";
import ManageCoursesNone from "./ManageCoursesNone";
import { connect } from "react-redux";

const ManageCourses = ({
  bootcamp,
  courses,
  location,
  getCourses,
  loading,
  getBootcampbyID
}) => {
  useEffect(() => {
    getCourses(location.state.bootcampId);
    getBootcampbyID(location.state.bootcampId);
  }, [getCourses, getBootcampbyID]);

  return (
    <Fragment>
      {courses.length <= 0 && (
        <Fragment>
          {loading ? <Spinner /> : <ManageCoursesNone bootcamp={bootcamp} />}
        </Fragment>
      )}
      <Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <ManageCourseItem bootcamp={bootcamp} courses={courses} />
        )}
      </Fragment>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  courses: state.courses.courses,
  isAutheniticated: state.auth.isAutheniticated,
  loading: state.auth.loading,
  bootcamp: state.bootcamps.bootcamp
});

export default connect(mapStateToProps, { getCourses, getBootcampbyID })(
  ManageCourses
);
