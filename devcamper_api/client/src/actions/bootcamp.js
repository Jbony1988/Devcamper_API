import axios from "axios";

import {
  GET_BOOTCAMP_SUCCESS,
  GET_BOOTCAMP_SUCCESS_ERROR,
  GET_SINGLE_BOOTCAMP,
  GET_SINGLE_BOOTCAMP_ERROR,
  GET_BOOTCAMP_BY_RADIUS,
  GET_BOOTCAMP_BY_RADIUS_ERROR,
  CREATE_BOOTCAMP_SUCCESS,
  CREATE_BOOTCAMP_SUCCESS_ERROR,
  UPDATE_BOOTCAMP_SUCCESS,
  UPDATE_BOOTCAMP_SUCCESS_ERROR
} from "./types";

// GET Bootcamp by ID
export const getBootcampbyID = _id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/bootcamps/${_id}`);
    dispatch({
      type: GET_SINGLE_BOOTCAMP,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_SINGLE_BOOTCAMP_ERROR
    });
  }
};

// GET ALL BOOTCAMPS
export const getBootcamps = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/bootcamps");
    dispatch({
      type: GET_BOOTCAMP_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_BOOTCAMP_SUCCESS_ERROR
    });
  }
};

// GET ALL BOOTCAMPS
export const getBootcampsByRadius = (zipcode, miles) => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/bootcamps/radius/${zipcode}/${miles}`);
    dispatch({
      type: GET_BOOTCAMP_BY_RADIUS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_BOOTCAMP_BY_RADIUS_ERROR
    });
  }
};

export const createBootcamp = (formData, history) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  console.log(formData);
  const body = JSON.stringify(formData);

  console.log(" bootcamp", body);

  try {
    const res = await axios.post("/api/v1/bootcamps", body, config);
    dispatch({
      type: CREATE_BOOTCAMP_SUCCESS,
      payload: res.data
    });
    history.push("/manage-bootcamps");
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }
    dispatch({
      type: CREATE_BOOTCAMP_SUCCESS_ERROR
    });
  }
};

export const updateBootcamp = (_id, formData, history) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  console.log(formData);
  const body = JSON.stringify(formData);

  try {
    const res = await axios.put(`/api/v1/bootcamps/${_id}`, body, config);
    dispatch({
      type: UPDATE_BOOTCAMP_SUCCESS,
      payload: res.data
    });
    history.push("/manage-bootcamps");
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }
    dispatch({
      type: UPDATE_BOOTCAMP_SUCCESS_ERROR
    });
  }
};
