import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Alert from "./components/Alert/Alert";
import ManageAccount from "./components/Account/ManageAccount";
import Bootcamps from "./components/Pages/Bootcamps/Bootcamps";
import ManageBootcampNone from "./components/Account/ManageBootcampNone";
import ManageBootcamps from "./components/Account/ManageBootcamps";
import ManageReviews from "./components/Account/ManageReviews";

import Cookies from "js-cookie";
import { loadUser } from "./actions/auth";
import setAuthCookie from "./utils/setAuthCookie";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/Pages/Home/Home";

import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";
import "./css/bootstrap.css";

import setAuthToken from "./utils/setAuthCookie";

if (document.cookie) {
  setAuthToken(document.cookie);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [loadUser]);

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
              path="/manage-bootcamps"
              component={ManageBootcamps}
            />
            <PrivateRoute
              exact
              path="/manage-reviews"
              component={ManageReviews}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/bootcamps" component={Bootcamps} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
