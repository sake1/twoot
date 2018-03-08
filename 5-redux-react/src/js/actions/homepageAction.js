import axios from "axios";
import ActionList from "../actionList";
import server from "../server"

export function fetchTweet(user) {
  return dispatch => {
    dispatch({type: ActionList.ON_TWEET_FETCH});
    axios.get(server + "/api/twoot/" + user.user.id + "/display?token=" + user.token)
      .then((response) => {
        dispatch({type: ActionList.ON_TWEET_FETCHED, payload: response.data.twoots})
      })
      .catch((err) => {
        dispatch({type: ActionList.ON_TWEET_FETCH_FAIL, payload: err})
      })
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

export function uploadTweet(user, tweet) {
  return dispatch => {
    axios.post(server + "/api/twoot/" + user.user.id + "/create", {
      ...tweet,
      token: user.token
    }).then((response) => {
        dispatch({type: ActionList.ON_TWEET_UPLOADED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: ActionList.ON_TWEET_UPLOAD_FAIL, payload: err})
      })
  }
}

export function inputErrorNotify(message) {
  return {
    type: ActionList.ON_INPUT_ERROR,
    payload: message
  };
}

export function deleteTwootById(user, id) {
  return dispatch => {
    axios.post(server + "/api/twoot/delete", {
      twootId: id,
      token: user.token
    }).then((response) => {
        dispatch({type: ActionList.ON_TWEET_DELETED, payload: {"id": id}})
      })
      .catch((err) => {
        dispatch({type: ActionList.ON_TWEET_DELETE_FAIL, payload: err})
      })
  }
}

export function selectTwoot(id) {
  return {
    type: ActionList.ON_TWEET_SELECTED,
    payload: {
      "id": id
    }
  };
}

export function deselectTwoot() {
  return {
    type: ActionList.ON_TWEET_DESELECTED
  };
}

export function updateTwoot(user, twoot) {
  return dispatch => {
    axios.post(server + "/api/twoot/update", {
      ...twoot,
      token: user.token
    }).then((response) => {
        dispatch({type: ActionList.ON_TWEET_UPDATED})
        dispatch(fetchTweet(user))
      })
      .catch((err) => {
        dispatch({type: ActionList.ON_TWEET_UPDATE_FAIL, payload: err})
      })
  }
}
