import ActionList from "../actionList";

export default function reducer(state={
    tweets: [],
    selectedId: null
  }, action) {

    if(action.type == ActionList.ON_TWEET_FETCHED) {
      return {
        ...state,
        tweets: action.payload
      };
    } else if(action.type == ActionList.ON_TWEET_UPLOADED) {
      return {
        ...state,
        tweets: state.tweets.concat([action.payload])
      };
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
