import {
  GET_REVIEWS_ERROR,
  GET_REVIEWS_SUCCESS,
  ADD_REVIEW,
  EDIT_REVIEWS,
  EDIT_REVIEWS_ERROR,
  ADD_REVIEW_ERROR,
  GET_REVIEW,
  GET_REVIEW_ERROR
} from "../actions/types";

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
        reviews: []
      };
    case ADD_REVIEW:
    case EDIT_REVIEWS:
      return {
        ...state,
        loading: false,
        reviews: payload.data
      };
    case GET_REVIEW:
      return {
        ...state,
        loading: false,
        review: payload.data
      };
    case GET_REVIEW_ERROR:
      return {
        ...state,
        loading: false,
        review: []
      };
    case ADD_REVIEW_ERROR:
    case EDIT_REVIEWS_ERROR:
      return {
        ...state,
        loading: false,
        reviews: []
      };
    default:
      return state;
  }
}
