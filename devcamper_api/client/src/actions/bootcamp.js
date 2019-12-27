import axios from "axios";

import { GET_BOOTCAMP_SUCCESS, GET_BOOTCAMP_SUCCESS_ERROR } from "./types";

// lOAD USER
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
