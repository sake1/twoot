import axios from "axios";
import ActionList from "../actionList";

export function signin(user) {
  return dispatch => {
    dispatch({type: ActionList.ON_SIGNIN});
    axios.post("http://192.168.200.163:8000/api/user/create", user)
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
