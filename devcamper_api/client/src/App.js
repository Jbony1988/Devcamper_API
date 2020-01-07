import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Alert from "./components/Alert/Alert";
import ManageAccount from "./components/Account/ManageAccount";
import ManageCourses from "./components/Courses/ManageCourses";
import Bootcamps from "./components/Pages/Bootcamps/Bootcamps";
import Reviews from "./components/Reviews/Reviews";
import CreateBootcamp from "./components/Account/CreateBootcamp";
import AddCourse from "./components/Courses/AddCourse";
import EditBootcamp from "./components/Account/EditBootcamp";
import ManageBootcamps from "./components/Account/ManageBootcamps";
import ManageReviews from "./components/Account/ManageReviews";

import { loadUser } from "./actions/auth";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/Pages/Home/Home";
import { connect } from "react-redux";
import { getBootcamps, getBootcampbyID } from "./actions/bootcamp";
import Bootcamp from "./components/Bootcamp/Bootcamp";

import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";
import "./css/bootstrap.css";
import Cookies from "js-cookie";
import setAuthToken from "./utils/setAuthCookie";
import { addCourse } from "./actions/courses";

if (Cookies.get("token")) {
  setAuthToken(Cookies.get("token"));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getBootcamps());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Alert />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute
              exact
              path="/manage-account"
              component={ManageAccount}
            />
            <PrivateRoute
              exact
              path="/manage-bootcamps/:id"
              component={ManageBootcamps}
            />
            <PrivateRoute
              exact
              path="/create-bootcamp"
              component={CreateBootcamp}
            />
            <PrivateRoute
              exact
              path="/manage-reviews"
              component={ManageReviews}
            />

            <PrivateRoute exact path="/add-course/:id" component={AddCourse} />
            <PrivateRoute
              exact
              path="/manage-courses"
              component={ManageCourses}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/bootcamps" component={Bootcamps} />
            <Route exact path="/bootcamp/:id" component={Bootcamp} />
            <Route exact path="/edit-bootcamp/:id" component={EditBootcamp} />
            <Route
              exact
              path="/bootcamps/radius/:zipcode/:distance"
              component={Bootcamps}
            />
            <Route exact path="/bootcamp/:id/reviews" component={Reviews} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
