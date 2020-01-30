import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Alert from "../Alert/Alert";
import ManageAccount from "../Account/ManageAccount";
import ManageCourses from "../Courses/ManageCourses";
import Bootcamps from "../Pages/Bootcamps/Bootcamps";
import Reviews from "../Reviews/Reviews";
import AddReview from "../Reviews/AddReview";
import CreateBootcamp from "../Account/CreateBootcamp";
import AddCourse from "../Courses/AddCourse";
import ManageCourseItem from "../Courses/ManageCourseItem";
import EditBootcamp from "../Account/EditBootcamp";
import ManageBootcamps from "../Account/ManageBootcamps";
import ManageReviews from "../Account/ManageReviews";
import Bootcamp from "../Bootcamp/Bootcamp";
import EditReviews from "../Reviews/EditReviews";
import Home from "../Pages/Home/Home";
import UserRoute from "./UserRoute";
import PublisherRoute from "../routing/PublisherRoute";
import PrivateRoute from "../routing/PrivateRoute";
import { hasRole } from "../Authorization/Authorization";

import { connect } from "react-redux";

const Routes = ({ user }) => {
  const [userInfo, setUser] = useState(null);

  // console.log(user, "routing");
  //   const { role } = user;
  //   console.log(role, "role");

  // useEffect(() => {
  //   const userData = Object.entries(user);
  //   console.log(userData);
  //   setUser(userData);
  // }, [user]);

  console.log(user, "userinfo");

  return (
    <Fragment>
      <Alert />

      <Switch>
        <PrivateRoute exact path="/manage-account" component={ManageAccount} />

        {/* <PublisherRoute
          exact
          path="/manage-bootcamp"
          component={ManageBootcamps}
        /> */}

        {/* <PublisherRoute
          exact
          path="/create-bootcamp"
          component={CreateBootcamp}
        /> */}
        <UserRoute exact path="/manage-reviews" component={ManageReviews} />

        {/* <PublisherRoute
          exact
          path="/manage-course-item"
          component={ManageCourseItem}
        /> */}

        {/* <PublisherRoute exact path="/add-course/:id" component={AddCourse} />
        <UserRoute exact path="/add-review/:id" component={AddReview} />
        <UserRoute exact path="/edit-review/:id" component={EditReviews} />
        <PublisherRoute
          exact
          path="/manage-courses"
          component={ManageCourses}
        /> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/bootcamps" component={Bootcamps} />
        <Route exact path="/bootcamp/:id" component={Bootcamp} />
        <Route exact path="/edit-bootcamp" component={EditBootcamp} />
        <Route
          exact
          path="/bootcamps/radius/:zipcode/:distance"
          component={Bootcamps}
        />
        <Route exact path="/bootcamp/:id/reviews" component={Reviews} />
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Routes);
