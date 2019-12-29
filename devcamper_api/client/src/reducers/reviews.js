import { GET_REVIEWS_ERROR, GET_REVIEWS_SUCCESS } from "../actions/types";

const initialState = {
  reviews: [],
  loading: true,
  review: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: payload.data
      };
    case GET_REVIEWS_ERROR:
      return {
        ...state,
        loading: false,
        reviewS: []
      };
    default:
      return state;
  }
}
