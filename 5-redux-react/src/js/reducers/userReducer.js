import ActionList from "../actionList";
import axios from "axios";
import server from "../server"
import storage from "../storage"

export default function reducer(state={
    user: null,
    userTemplateDoNotUse: {
      id: null,
      username: null,
      password: null,
      fullname: null,
      birthdate: null,
      age: null,
    }
  }, action) {

    if(action.type == ActionList.ON_LOGIN) {
      axios.post(server + "/api/login", action.payload)
        .then((response) => {
          console.log(response);
          storage.dispatch({type: ActionList.ON_LOGIN_SUCCESS, payload: response.data})
        })
        .catch((err) => {
          storage.dispatch({type: ActionList.ON_LOGIN_ERROR, payload: err})
        })
      return state;
    } else if(action.type == ActionList.ON_SIGNIN) {
      axios.post(server + "/api/user/create", action.payload)
        .then((response) => {
          storage.dispatch({type: ActionList.ON_SIGNIN_SUCCESS, payload: response.data})
        })
        .catch((err) => {
          storage.dispatch({type: ActionList.ON_SIGNIN_ERROR, payload: err})
        })
      return state;
    } else if(action.type == ActionList.ON_LOGIN_SUCCESS) {
      return {
        ...state,
        user: JSON.stringify(action.payload)
      };
    } else if(action.type == ActionList.ON_SIGNIN_SUCCESS) {
      return {
        ...state,
        user: JSON.stringify(action.payload)
      };
    } else if(action.type == ActionList.CLEAR_USER_INFO) {
      return {
        ...state,
        user: null
      };
    } else {
      return state;
    }
}
