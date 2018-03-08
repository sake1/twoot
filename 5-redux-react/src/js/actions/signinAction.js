import axios from "axios";
import ActionList from "../actionList";
import server from "../server"

export function signin(user) {
  return dispatch => {
    dispatch({type: ActionList.ON_SIGNIN});
    axios.post(server + "/api/user/create", user)
      .then((response) => {
        dispatch({type: ActionList.ON_SIGNIN_SUCCESS, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: ActionList.ON_SIGNIN_ERROR, payload: err})
      })
  }
}

export function gotoLogin() {
  return {
    type: ActionList.ON_GOTO_LOGIN
  };
}
