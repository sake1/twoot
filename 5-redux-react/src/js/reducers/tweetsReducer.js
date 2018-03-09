import ActionList from "../actionList";
import axios from "axios";
import server from "../server"
import storage from "../storage"

export default function reducer(state={
    tweets: [],
    selectedId: null
  }, action) {

    if(action.type == ActionList.ON_TWEET_FETCH) {
      console.log("userdata", action.payload.user.id, "token", action.payload.token)
      axios.get(server + "/api/twoot/" + action.payload.user.id + "/display?token=" + action.payload.token)
      .then((response) => {
        storage.dispatch({type: ActionList.ON_TWEET_FETCHED, payload: response.data.twoots})
      })
      .catch((err) => {
        storage.dispatch({type: ActionList.ON_TWEET_FETCH_FAIL, payload: err})
      })
      return state;
    } else if(action.type == ActionList.ON_TWEET_FETCHED) {
      return {
        ...state,
        tweets: action.payload
      };
    } else if(action.type == ActionList.ON_TWEET_UPLOAD) {
      axios.post(server + "/api/twoot/" + action.payload.user.user.id + "/create", {
        ...action.payload.tweet,
        token: action.payload.user.token
      }).then((response) => {
        storage.dispatch({type: ActionList.ON_TWEET_UPLOADED, payload: response.data})
      })
      .catch((err) => {
        storage.dispatch({type: ActionList.ON_TWEET_UPLOAD_FAIL, payload: err})
      })
      return state;
    } else if(action.type == ActionList.ON_TWEET_UPLOADED) {
      return {
        ...state,
        tweets: state.tweets.concat([action.payload])
      };
    } else if(action.type == ActionList.ON_TWEET_DELETE) {
      axios.post(server + "/api/twoot/delete", {
        twootId: action.payload.id,
        token: action.payload.user.token
      }).then((response) => {
        storage.dispatch({type: ActionList.ON_TWEET_DELETED, payload: {"id": action.payload.id}})
      })
      .catch((err) => {
	       storage.dispatch({type: ActionList.ON_TWEET_DELETE_FAIL, payload: err})
      })
      return state;
    } else if(action.type == ActionList.ON_TWEET_DELETED) {
      return {
        ...state,
        tweets: state.tweets.filter((item, index) => item.id != action.payload.id)
      }
    } else if(action.type == ActionList.ON_TWEET_SELECTED) {
      return {
        ...state,
        selectedId: action.payload.id
      }
    } else if(action.type == ActionList.ON_TWEET_DESELECTED) {
      return {
        ...state,
        selectedId: null
      }
    } else if(action.type == ActionList.ON_TWEET_UPDATE) {
      axios.post(server + "/api/twoot/update", {
        ...action.payload.twoot,
        token: action.payload.user.token
      }).then((response) => {
        storage.dispatch({type: ActionList.ON_TWEET_UPDATED})
        storage.dispatch({
          type: ActionList.ON_TWEET_FETCH,
          payload: action.payload.user
        })
      })
      .catch((err) => {
	       storage.dispatch({type: ActionList.ON_TWEET_UPDATE_FAIL, payload: err})
      })
      return state;
    } else if(action.type == ActionList.ON_TWEET_UPDATED) {
      return {
        ...state,
        selectedId: null
      }
    } else if(action.type == ActionList.CLEAR_USER_INFO) {
      return {
        ...state,
        tweets: [],
        selectedId: null
      };
    } else {
      return state;
    }
}
