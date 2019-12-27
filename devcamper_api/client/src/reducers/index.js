import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import bootcamps from "./bootcamps";

export default combineReducers({ alert, auth, bootcamps });
