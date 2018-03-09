var ActionList = {
  ON_LOGIN:              "login",
  ON_LOGIN_ERROR:        "login_error",
  ON_LOGIN_SUCCESS:      "login_success",

  ON_SIGNIN:             "signin",
  ON_SIGNIN_ERROR:       "signin_error",
  ON_SIGNIN_SUCCESS:     "signin_success",

  ON_TWEET_FETCH:        "fetching_tweets",
  ON_TWEET_FETCHED:      "tweets_fetched",
  ON_TWEET_FETCH_FAIL:   "fetching_tweet_fail",
  ON_TWEET_UPLOAD:       "upload_tweet",
  ON_TWEET_UPLOADED:     "tweet_uploaded",
  ON_TWEET_UPLOAD_FAIL:  "tweet_uplaod_fail",
  ON_TWEET_DELETE:       "delete_tweet",
  ON_TWEET_DELETED:      "tweet_deleted",
  ON_TWEET_DELETE_FAIL:  "tweet_delete_fail",
  ON_TWEET_SELECTED:     "select_this_tweet",
  ON_TWEET_DESELECTED:   "deselect_this_tweet",
  ON_TWEET_UPDATE:       "update_tweet",
  ON_TWEET_UPDATED:      "tweet_updated",
  ON_TWEET_UPDATE_FAIL:  "tweet_update_fail",

  ON_INPUT_ERROR:        "input_error",

  ON_GOTO_SIGNIN:        "redirect_signin",
  ON_GOTO_LOGIN:         "redirect_login",
  ON_GOTO_HOMEPAGE:      "redirect_homepage",

  CLEAR_USER_INFO:       "clear_user_info",
};

export default(ActionList);
