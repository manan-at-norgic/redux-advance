import { combineReducers } from "redux";
import callApi from "./postsApi";
import crud from "./crud.js";
// console.log(crud);
export default combineReducers({ users: crud, posts: callApi });
