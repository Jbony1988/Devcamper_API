import axios from "axios";

import { GET_REVIEWS_SUCCESS, GET_REVIEWS_ERROR } from "./types";

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
