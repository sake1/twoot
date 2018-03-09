import ActionList from "../actionList";
import server from "../server"
import axios from "axios";
import storage from "../storage"

const LOGIN    = 1;
const SIGNIN   = 2;
const HOMEPAGE = 3;

export default function reducer(state={
  code_login: LOGIN,
  code_signin: SIGNIN,
  code_homepage: HOMEPAGE,
  location: LOGIN,
  error: null
  }, action) {

////////////////////////////////////////////////////////////////////////////////
    if(action.type == ActionList.ON_GOTO_LOGIN) {
      return {
        ...state,
        location: LOGIN,
        error: null
      };
    } else if(action.type == ActionList.ON_LOGIN_SUCCESS) {
      return {
        ...state,
        location: HOMEPAGE,
        error: null
      };
    } else if(action.type == ActionList.ON_LOGIN_ERROR) {
      return {
        ...state,
        location: LOGIN,
        error: JSON.stringify(action.payload)
      };
////////////////////////////////////////////////////////////////////////////////
    } else if(action.type == ActionList.ON_GOTO_SIGNIN) {
      return {
        ...state,
        location: SIGNIN,
        error: null
      };
    } else if(action.type == ActionList.ON_SIGNIN_SUCCESS) {
      return {
        ...state,
        location: LOGIN,
        error: null
      };
    } else if(action.type == ActionList.ON_SIGNIN_ERROR) {
      return {
        ...state,
        location: SIGNIN,
        error: JSON.stringify(action.payload)
      };
////////////////////////////////////////////////////////////////////////////////
    } else if(action.type == ActionList.ON_GOTO_HOMEPAGE) {
      return {
        ...state,
        location: HOMEPAGE,
        error: null
      };
    } else if(action.type == ActionList.ON_TWEET_FETCH_FAIL
      || action.type == ActionList.ON_TWEET_UPLOAD_FAIL
      || action.type == ActionList.ON_TWEET_DELETE_FAIL
      || action.type == ActionList.ON_TWEET_UPDATE_FAIL) {
      return {
        ...state,
        location: HOMEPAGE,
        error: JSON.stringify(action.payload)
      };
////////////////////////////////////////////////////////////////////////////////
    } else if(action.type == ActionList.ON_INPUT_ERROR) {
      return {
        ...state,
        error: JSON.stringify(action.payload)
      };
    } else {
      return state;
    }
}
