import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getBootcampbyID } from "../../actions/bootcamp";
import { getCourses } from "../../actions/courses";
import { getReviews } from "../../actions/reviews";
import Spinner from "../Spinner/Spinner";
import SideBar from "../../components/SideBar/SideBar";
import CourseItem from "../Course/CourseItem";
import PropTypes from "prop-types";

const Bootcamp = ({
  getBootcampbyID,
  getCourses,
  bootcamp: {
    _id,
    name,
    averageRating,
    description,
    averageCost,
    website,
    housing,
    jobAssistance,
    jobGuarantee,
    acceptGi
  },
  courses,
  loading,
  match
}) => {
  useEffect(() => {
    getBootcampbyID(match.params.id);
    getCourses(match.params.id);
  }, [getBootcampbyID, getCourses, match]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <section className="bootcamp mt-5">
          <div className="container">
            <div className="row">
              {/* <!-- Main col --> */}
              <div className="col-md-8">
                <h1>{name}</h1>
                {/* <!-- Description --> */}
                <p>{description}</p>
                {/* <!-- Avg cost --> */}
                <p className="lead mb-4">
                  Average Course Cost:{" "}
                  <span className="text-primary">{`$${averageCost}`}</span>
                </p>
                {/* <!-- Courses --> */}

                {courses.map(course => (
                  <CourseItem
                    key={course._id}
                    title={course.title}
                    description={course.description}
                    weeks={course.weeks}
                    tuition={course.tuition}
                    minimumSkill={course.minimumSkill}
                    scholarShipsAvailable={course.scholarShipsAvailable}
                  />
                ))}
              </div>

              {/* <!-- Sidebar --> */}
              <SideBar
                _id={_id}
                rating={averageRating}
                acceptGi={acceptGi}
                jobGuarantee={jobGuarantee}
                jobAssistance={jobAssistance}
                housing={housing}
                website={website}
              />
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

Bootcamp.propTypes = {
  getBootcampbyID: PropTypes.func.isRequired,
  getCourses: PropTypes.func.isRequired,
  courses: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  bootcamp: state.bootcamps.bootcamp,
  loading: state.bootcamps.loading,
  courses: state.courses.courses
});

export default connect(mapStateToProps, {
  getBootcampbyID,
  getCourses,
  getReviews
})(Bootcamp);
