import React, { Fragment, useEffect, useState } from "react";
import ManageBootcampNone from "../Account/ManageBootcampNone";
import ManageBootcampItem from "../Account/ManageBootcampItem";

import { connect } from "react-redux";
import { getCourses } from "../../actions/courses";
import { getBootcampbyID } from "../../actions/bootcamp";

import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ManageBootcamps = ({
  isAuthenticated,
  bootcamp,
  user,
  match,
  getCourses,
  getBootcampbyID
}) => {
  const [publisherBootcamp, setBootcamp] = useState([]);

  useEffect(() => {
    // getBootcampbyID(match.params.id);
    const result = bootcamp.filter(b => b.user === user._id);
    const objectResult = result[0];
    setBootcamp(objectResult);
  }, [bootcamp, publisherBootcamp]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      {!publisherBootcamp ? <ManageBootcampNone /> : <ManageBootcampItem />}
    </Fragment>
  );
};

ManageBootcamps.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  bootcamp: state.bootcamps.bootcamps
});

export default connect(mapStateToProps, { getCourses, getBootcampbyID })(
  ManageBootcamps
);
