import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import "./App.css";
import "./css/bootstrap.css";

const App = () => (
  <Router>
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
