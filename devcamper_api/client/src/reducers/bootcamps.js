import {
  GET_BOOTCAMP_SUCCESS,
  GET_BOOTCAMP_SUCCESS_ERROR,
  GET_SINGLE_BOOTCAMP,
  CREATE_BOOTCAMP_SUCCESS,
  CREATE_BOOTCAMP_SUCCESS_ERROR,
  GET_BOOTCAMP_BY_RADIUS_ERROR,
  GET_BOOTCAMP_BY_RADIUS,
  GET_SINGLE_BOOTCAMP_ERROR,
  BOOTCAMP_UPDATE_SUCCESS,
  BOOTCAMP_UPDATE_ERROR,
  UPDATE_BOOTCAMP_SUCCESS,
  UPDATE_BOOTCAMP_SUCCESS_ERROR,
  UPLOAD_PHOTO,
  UPLOAD_PHOTO_ERROR
} from "../actions/types";

const initialState = {
  bootcamps: [],
  loading: true,
  bootcamp: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOTCAMP_SUCCESS:
      return {
        ...state,
        loading: false,
        bootcamps: payload.data
      };
    case GET_BOOTCAMP_BY_RADIUS:
      return {
        ...state,
        loading: false,
        bootcamps: payload.data
      };
    case GET_BOOTCAMP_BY_RADIUS_ERROR:
      return {
        ...state,
        loading: false,
        bootcamps: []
      };
    case GET_BOOTCAMP_SUCCESS_ERROR:
      return {
        ...state,
        loading: false,
        bootcamps: []
      };
    case GET_SINGLE_BOOTCAMP:
    case UPDATE_BOOTCAMP_SUCCESS:
    case CREATE_BOOTCAMP_SUCCESS:
    case BOOTCAMP_UPDATE_SUCCESS:
    case UPLOAD_PHOTO:
      return {
        ...state,
        loading: false,
        bootcamp: payload.data
      };
    case GET_SINGLE_BOOTCAMP_ERROR:
    case CREATE_BOOTCAMP_SUCCESS_ERROR:
    case UPDATE_BOOTCAMP_SUCCESS_ERROR:
    case UPLOAD_PHOTO_ERROR:
      return {
        ...state,
        loading: false,
        bootcamp: []
      };
    case BOOTCAMP_UPDATE_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
