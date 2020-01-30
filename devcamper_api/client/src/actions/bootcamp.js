import axios from "axios";
import { setAlert } from "./alert";
import { getReviews } from "./reviews";

import {
  GET_BOOTCAMP_SUCCESS,
  GET_BOOTCAMP_SUCCESS_ERROR,
  DELETE_BOOTCAMP_SUCCESS,
  DELETE_BOOTCAMP_ERROR,
  GET_SINGLE_BOOTCAMP,
  GET_SINGLE_BOOTCAMP_ERROR,
  GET_BOOTCAMP_BY_RADIUS,
  GET_BOOTCAMP_BY_RADIUS_ERROR,
  CREATE_BOOTCAMP_SUCCESS,
  CREATE_BOOTCAMP_SUCCESS_ERROR,
  UPDATE_BOOTCAMP_SUCCESS,
  UPDATE_BOOTCAMP_SUCCESS_ERROR,
  UPLOAD_PHOTO,
  UPLOAD_PHOTO_ERROR
} from "./types";

import { loadUser } from "./auth";

// GET Bootcamp by ID
export const getBootcampbyID = _id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/bootcamps/${_id}`);

    dispatch({
      type: GET_SINGLE_BOOTCAMP,
      payload: res.data
    });
    dispatch(getReviews(_id));
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
    dispatch(loadUser());
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
    dispatch(getBootcamps());
    dispatch(
      setAlert("You have successfully created your bootcamp", "success")
    );

    history.push("/manage-courses");
  } catch (err) {
    // if (err.response.data) {
    //   const errorStatus = err.response.data;
    //   const { error } = errorStatus;
    //   dispatch(setAlert(`${error}`, "danger"));
    // }

    // const errors = err.response.data.errors;
    // console.log(" erros", errors);
    // dispatch(setAlert(`errors`, "danger"));
    // const error = err.response.errors;
    // if (error) {
    //   error.forEach(error => dispatch(setAlert(error.message, "danger")));
    // }

    dispatch({
      type: CREATE_BOOTCAMP_SUCCESS_ERROR
    });
  }
};

export const updateBootcamp = (_id, formData) => async dispatch => {
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
    dispatch(setAlert("You have successfully update your bootcamp", "success"));
    // history.push({
    //   pathname: "/manage-courses",
    //   state: {
    //     bootcampId: _id
    //   }
    // });
  } catch (err) {
    const errors = err.response;
    console.log(errors);
    dispatch(setAlert(`there was a problem`, "danger"));

    dispatch({
      type: UPDATE_BOOTCAMP_SUCCESS_ERROR
    });
  }
};

// /api/v1/bootcamps/:id
export const deleteBootcamp = (_id, history) => async dispatch => {
  try {
    const res = await axios.delete(`/api/v1/bootcamps/${_id}`);
    dispatch({
      type: DELETE_BOOTCAMP_SUCCESS,
      payload: res.data
    });

    dispatch(
      setAlert("You have successfully  deleted your bootcamp", "success")
    );

    dispatch(getBootcamps());
    history.push("/manage-bootcamp");
  } catch (err) {
    // dispatch(setAlert(`you have successfully deleted the bootcamp`, "danger"));
    // if (err.response.data) {
    //   const errorStatus = err.response.data;
    //   const { error } = errorStatus;
    //   dispatch(setAlert(`${error}`, "danger"));
    // }

    dispatch({
      type: DELETE_BOOTCAMP_ERROR
    });
  }
};

// Upload photo
export const uploadBootcampPhoto = (
  _id,
  formData,
  history
) => async dispatch => {
  try {
    const res = await axios.put(`/api/v1/bootcamps/${_id}/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    dispatch({
      type: UPLOAD_PHOTO,
      payload: res.data
    });
    dispatch(getBootcamps());
    history.push("/manage-bootcamp");
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }
    dispatch({
      type: UPLOAD_PHOTO_ERROR
    });
  }
};
