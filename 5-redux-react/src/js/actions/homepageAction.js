import axios from "axios";
import ActionList from "../actionList";

export function fetchTweet(id) {
  return dispatch => {
    dispatch({type: ActionList.ON_TWEET_FETCH});
    // axios.get("http://some.random.url")
    //   .then((response) => {
    //     dispatch({type: ActionList.ON_TWEET_FETCHED, payload: response.data})
    //   })
    //   .catch((err) => {
    //     dispatch({type: ActionList.ON_TWEET_FETCH_FAIL, payload: err})
    //   })
  }
}

export function clearUserInfo() {
  return {
    type: ActionList.CLEAR_USER_INFO
  };
}

export function gotoLogin() {
  return {
    type: ActionList.ON_GOTO_LOGIN
  };
}
