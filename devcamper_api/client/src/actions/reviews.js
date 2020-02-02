import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR,
  ADD_REVIEW,
  EDIT_REVIEWS,
  EDIT_REVIEWS_ERROR,
  ADD_REVIEW_ERROR,
  GET_REVIEW,
  GET_REVIEW_ERROR
} from "./types";

// GET reviews associated with bootcamp by id
export const getReviews = _id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/bootcamps/${_id}/reviews`);
    dispatch({
      type: GET_REVIEWS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_REVIEWS_ERROR
    });
  }
};

// GET reviews associated with bootcamp by id
export const getReview = _id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/reviews/${_id}`);
    dispatch({
      type: GET_REVIEW,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_REVIEW_ERROR
    });
  }
};

// /api/v1/bootcamps/:bootcampId/reviews

export const addReviews = (_id, formData, history) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  console.log(formData);
  const body = JSON.stringify(formData);

  console.log("review", body);

  try {
    const res = await axios.post(
      `/api/v1/bootcamps/${_id}/reviews`,
      body,
      config
    );
    dispatch({
      type: ADD_REVIEW,
      payload: res.data
    });
    history.push("/bootcamps");
    dispatch(setAlert(`You have successfully added a review`, "success"));
  } catch (err) {
    dispatch(setAlert(`There was a problem adding your review`, "danger"));
    dispatch({
      type: ADD_REVIEW_ERROR
    });
  }
};

// /api/v1/reviews/:id

export const editReview = (_id, formData, history) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  console.log(formData);
  const body = JSON.stringify(formData);

  console.log("review", body);

  try {
    const res = await axios.put(`/api/v1/reviews/${_id}`, body, config);
    dispatch({
      type: EDIT_REVIEWS,
      payload: res.data
    });

    dispatch(getReviews(_id));
    history.push("/");
    dispatch(setAlert(`You have successfully added a review`, "success"));
  } catch (err) {
    dispatch(setAlert(`There was a problem adding your review`, "danger"));
    dispatch({
      type: EDIT_REVIEWS_ERROR
    });
  }
};
