import axios from "axios";
import ActionList from "../actionList";

export function login(user) {
  return dispatch => {
    dispatch({type: ActionList.ON_LOGIN});
    axios.post("http://192.168.200.163:8000/api/login", user)
      .then((response) => {
        dispatch({type: ActionList.ON_LOGIN_SUCCESS, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: ActionList.ON_LOGIN_ERROR, payload: err})
      })
  }
}

export function gotoSignin() {
  return {
    type: ActionList.ON_GOTO_SIGNIN
  };
}
