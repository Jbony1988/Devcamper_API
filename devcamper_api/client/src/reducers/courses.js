import { GET_COURSES_SUCCESS, GET_COURSES_ERROR } from "../actions/types";

const initialState = {
  courses: [],
  loading: true,
  course: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: payload.data
      };
    case GET_COURSES_ERROR:
      return {
        ...state,
        loading: false,
        courses: []
      };
    default:
      return state;
  }
}
