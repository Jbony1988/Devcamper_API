import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import Login from "./components/Auth/Login";
import ResetPassword from "./components/Account/ResetPassword";

import Routes from "./components/routing/Routes";

import { loadUser } from "./actions/auth";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/Pages/Home/Home";

import { getBootcamps } from "./actions/bootcamp";

import "./App.css";
import "./css/bootstrap.css";
import Cookies from "js-cookie";
import setAuthToken from "./utils/setAuthCookie";

if (Cookies.get("token")) {
  setAuthToken(Cookies.get("token"));
}

const App = ({ user }) => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getBootcamps());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
