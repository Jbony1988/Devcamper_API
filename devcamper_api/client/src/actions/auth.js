import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from "./types";
import Cookies from "js-cookie";
import setAuthCookie from "../utils/setAuthCookie";

// lOAD USER
export const loadUser = () => async dispatch => {
  if (document.cookie) {
    const token = document.cookie;
    setAuthCookie(token);
  }
  try {
    const res = await axios.get("/api/v1/auth/me");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User

export const register = ({ name, email, password, role }) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password, role });

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

// Login user
export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });
  console.log(body);

  try {
    const res = await axios.post("/api/v1/auth/login", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout clear profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
