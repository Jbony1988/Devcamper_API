import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ERROR
} from "../actions/types";
import Cookies from "js-cookie";

const initialState = {
  token: Cookies.get("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.data
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
      Cookies.set("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case FORGOT_PASSWORD_ERROR:
    case RESET_PASSWORD_ERROR:
      Cookies.remove("token");
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false
      };

    default:
      return state;
  }
}
