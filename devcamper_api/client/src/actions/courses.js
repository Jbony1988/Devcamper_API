import axios from "axios";

import {
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
  ADD_COURSE,
  ADD_COURSE_ERROR
} from "./types";

// GET Courses associated with Bootcamp
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

// ADD
export const addCourse = (_id, formData, history) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post(
      `/api/v1/bootcamps/${_id}/courses`,
      body,
      config
    );
    dispatch({
      type: ADD_COURSE,
      payload: res.data
    });
    history.push("/manage-account");
  } catch (err) {
    dispatch({
      type: ADD_COURSE_ERROR
    });
  }
};
