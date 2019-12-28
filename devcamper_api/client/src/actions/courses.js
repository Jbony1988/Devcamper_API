import axios from "axios";

import { GET_COURSES_SUCCESS, GET_COURSES_ERROR } from "./types";

// GET Bootcamp by ID
export const getCourses = _id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/bootcamps/${_id}/courses`);
    dispatch({
      type: GET_COURSES_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_COURSES_ERROR
    });
  }
};
