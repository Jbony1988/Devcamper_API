import {
  GET_BOOTCAMP_SUCCESS,
  GET_BOOTCAMP_SUCCESS_ERROR,
  GET_SINGLE_BOOTCAMP,
  GET_SINGLE_BOOTCAMP_ERROR
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
    case GET_BOOTCAMP_SUCCESS_ERROR:
      return {
        ...state,
        loading: false,
        bootcamps: []
      };
    case GET_SINGLE_BOOTCAMP:
      return {
        ...state,
        loading: false,
        bootcamp: payload.data
      };
    case GET_SINGLE_BOOTCAMP_ERROR:
      return {
        ...state,
        loading: false,
        bootcamp: []
      };
    default:
      return state;
  }
}
