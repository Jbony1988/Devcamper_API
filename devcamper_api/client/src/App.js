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
import Reviews from "./components/Reviews/Reviews";
import CreateBootcamp from "./components/Account/CreateBootcamp";
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
import { getBootcamps } from "./actions/bootcamp";
import Bootcamp from "./components/Bootcamp/Bootcamp";

import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";
import "./css/bootstrap.css";

import setAuthToken from "./utils/setAuthCookie";
import { updateBootcamp } from "./actions/bootcamp";

if (document.cookie) {
  setAuthToken(document.cookie);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getBootcamps());
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
              path="/create-bootcamp"
              component={CreateBootcamp}
            />
            <PrivateRoute
              exact
              path="/manage-reviews"
              component={ManageReviews}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/bootcamps" component={Bootcamps} />
            <Route exact path="/bootcamp/:id" component={Bootcamp} />
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
