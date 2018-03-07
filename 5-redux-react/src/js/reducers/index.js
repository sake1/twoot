import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import appNavigator from "./navigatorReducer"

export default combineReducers({
  
  user,
  tweets,
  appNavigator,
})
