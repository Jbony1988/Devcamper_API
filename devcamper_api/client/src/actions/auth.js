import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_SUCCESS_ERROR
} from "./types";
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

    dispatch(loadUser());
    dispatch(setAlert("You have successfully registered", "success"));
  } catch (err) {
    const errors = err.response.data;

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

  try {
    const res = await axios.post("/api/v1/auth/login", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

    dispatch(setAlert("You have successfully logged in", "success"));
  } catch (err) {
    console.log(err);
    // const errors = err.response.data.errors;
    dispatch(
      setAlert("Please enter the correct username or password", "danger")
    );
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout clear profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const forgotPassword = ({ email }) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ email });

  try {
    const res = await axios.post("/api/v1/auth/me", body, config);
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS_ERROR
    });
  }
};
