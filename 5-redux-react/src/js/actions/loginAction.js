import axios from "axios";
import ActionList from "../actionList";
import server from "../server"

export function login(user) {
  return dispatch => {
    dispatch({type: ActionList.ON_LOGIN});
    axios.post(server + "/api/login", user)
      .then((response) => {
        console.log(response);
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
