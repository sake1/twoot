import ActionList from "../actionList";

export default function reducer(state={
    tweets: [],
  }, action) {

    if(action.type == ActionList.ON_TWEET_FETCHED) {
      return {
        ...state,
        tweets: state.tweets.concat(action.payload)
      };
    } else {
      return state;
    }
}
