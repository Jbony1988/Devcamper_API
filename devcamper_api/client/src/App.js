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
import Bootcamps from "./components/Pages/Bootcamps/Bootcamps";
import Cookies from "js-cookie";
import { loadUser } from "./actions/auth";
import setAuthCookie from "./utils/setAuthCookie";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/Pages/Home/Home";
import "./App.css";
import "./css/bootstrap.css";

// if (Cookies.get("token")) {
//   setAuthCookie(Cookies.get("token"));
// }

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser);
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/bootcamps" component={Bootcamps} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
