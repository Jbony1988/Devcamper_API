import axios from "axios";

import {
  GET_BOOTCAMP_SUCCESS,
  GET_BOOTCAMP_SUCCESS_ERROR,
  GET_SINGLE_BOOTCAMP,
  GET_SINGLE_BOOTCAMP_ERROR,
  GET_BOOTCAMP_BY_RADIUS,
  GET_BOOTCAMP_BY_RADIUS_ERROR
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
