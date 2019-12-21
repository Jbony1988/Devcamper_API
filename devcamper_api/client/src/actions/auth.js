import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from "./types";
import Cookies from "js-cookie";

// lOAD USER
export const loadUser = () => async dispatch => {
  // token = Cookies.get("token");
  // if (token) {
  //   axios.defaults.headers.common["x-auth-token"] = token;
  // } else {
  //   delete axios.defaults.headers.common["x-auth-token"];
  // }
  // try {
  //   const res = await axios.get("/api/v1/auth/loadUser");
  //   dispatch({
  //     type: USER_LOADED,
  //     payload: res.data
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: AUTH_ERROR
  //   });
  // }
};

// Register User

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/v1/auth/register", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
