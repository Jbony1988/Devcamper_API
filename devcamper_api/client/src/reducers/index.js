import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import bootcamps from "./bootcamps";
import courses from "./courses";
import reviews from "./reviews";

export default combineReducers({ alert, auth, bootcamps, courses, reviews });
