import React, { Fragment, useEffect, useState } from "react";
import ManageBootcampNone from "../Account/ManageBootcampNone";
import ManageBootcampItem from "../Account/ManageBootcampItem";

import { connect } from "react-redux";
import { getUserBootcampSelectors } from "../../reducers/selectors";
import { getCourses } from "../../actions/courses";
import { getBootcampbyID } from "../../actions/bootcamp";

import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ManageBootcamps = ({
  isAuthenticated,
  bootcamps,
  user,
  userBootcamp,
  match,
  getCourses,
  getBootcampbyID
}) => {
  const publisherBootcamp = userBootcamp[0];

  console.log(publisherBootcamp, bootcamps);
  // const { _id } = publisherBootcamp;
  // const { role } = user;

  // useEffect(() => {
  // getCourses(_id);
  // const objectResult = result[0];
  // setBootcamp(objectResult);
  // const { _id } = objectResult;
  // getCourses(_id);
  // }, [bootcamps, getCourses]);

  // if (!isAuthenticated) {
  //   return <Redirect to="/login" />;
  // }

  // const userBootcampObject = userBootcamp[0];

  console.log("Manage bootcamp page", userBootcamp);

  return (
    <Fragment>
      {userBootcamp.length === 0 ? (
        <ManageBootcampNone />
      ) : (
        <ManageBootcampItem />
      )}
    </Fragment>
  );
};

ManageBootcamps.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  bootcamps: state.bootcamps.bootcamps,
  userBootcamp: getUserBootcampSelectors(state)
});

export default connect(mapStateToProps, { getCourses, getBootcampbyID })(
  ManageBootcamps
);
