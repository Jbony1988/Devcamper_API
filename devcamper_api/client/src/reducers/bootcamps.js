import {
  GET_BOOTCAMP_SUCCESS,
  GET_BOOTCAMP_SUCCESS_ERROR
} from "../actions/types";

const initialState = {
  bootcamps: [],
  loading: true,
  bootcamp: null
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
        bootcamps: [],
        bootcamp: null
      };
    default:
      return state;
  }
}
