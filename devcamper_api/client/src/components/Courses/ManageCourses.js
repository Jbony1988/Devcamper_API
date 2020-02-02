import React, { Fragment, useEffect } from "react";

import { getBootcampbyID, getBootcamps } from "../../actions/bootcamp";
import { getUserBootcampSelectors } from "../../reducers/selectors";
import Spinner from "../Spinner/Spinner";
import ManageCoursesNone from "./ManageCoursesNone";
import { connect } from "react-redux";

const ManageCourses = ({ bootcamps, user, getBootcamps, userBootcamp }) => {
  const publisherBootcamp = userBootcamp.filter(b => b.user === user._id);
  console.log(publisherBootcamp, "userbootcamp");
  // const publisherBootcamp = userBootcamp[0];
  // const { courses } = publisherBootcamp;
  // console.log(courses, "courses");

  useEffect(() => {
    getBootcamps();
  }, [getBootcamps]);

  return (
    <Fragment>
      <ManageCoursesNone bootcamp={publisherBootcamp} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  courses: state.courses.courses,
  user: state.auth.user,
  isAutheniticated: state.auth.isAutheniticated,
  bootcamps: state.bootcamps.bootcamps,
  userBootcamp: getUserBootcampSelectors(state)
});

export default connect(mapStateToProps, { getBootcampbyID, getBootcamps })(
  ManageCourses
);
