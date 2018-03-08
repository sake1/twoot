import ActionList from "../actionList";

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

    if(action.type == ActionList.ON_LOGIN_SUCCESS) {
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
