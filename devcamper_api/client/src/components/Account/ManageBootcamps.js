import React, { Fragment, useEffect, useState } from "react";
import ManageBootcampNone from "../Account/ManageBootcampNone";
import ManageBootcampItem from "../Account/ManageBootcampItem";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ManageBootcamps = ({ isAuthenticated, bootcamp, user }) => {
  const [publisherBootcamp, setBootcamp] = useState([]);

  useEffect(() => {
    const result = bootcamp.filter(b => b.user === user._id);
    const objectResult = result[0];
    setBootcamp(objectResult);
    // console.log(objectResult);
    // setBootcamp(result);
    // console.log(publisherBootcamp);
  }, [setBootcamp, bootcamp, user._id]);

  // console.log(name, "bootcamp name");
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      {!publisherBootcamp ? (
        <ManageBootcampNone />
      ) : (
        <ManageBootcampItem bootcamp={publisherBootcamp} />
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
  bootcamp: state.bootcamps.bootcamps
});

export default connect(mapStateToProps)(ManageBootcamps);
