import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const SET_NAME          = 1;
const SET_GENDER        = 2;
const SET_CURRENT_SCORE = 3;
const SET_HIGH_SCORE    = 4;

function userReducer(state = {username: "sake", realname: "timothy", gender: "male"}, action) {
  if(action.type === SET_NAME) {
    return {...state, realname: action.payload.data};
  } else if(action.type === SET_GENDER) {
    return {...state, gender: action.payload.data};
  } else {
    return state;
  }
}

function scoreReducer(state = {current: 0, highest: 100}, action) {
  if(action.type === SET_CURRENT_SCORE) {
    if(typeof action.payload.data != "number") {
      throw new Error("Wrong argument type");
    }
    return {...state, current: action.payload.data};
  } else if(action.type === SET_HIGH_SCORE) {
    return {...state, highest: action.payload.data};
  } else {
    return state;
  }
}

const reducer = combineReducers({
  userReducer,
  scoreReducer
});

// function reducer(state, action) {
//   var newState = state;
//   if(action.type === "INC") {
//     return newState + action.payload.value;
//   } else if(action.type === "DEC") {
//     return newState - action.payload.value;
//   } else if(action.type === "SET") {
//     return action.payload.value;
//   } else {
//     return state;
//   }
// }

const checker = (store) => (next) => (action) => {
  if(action.type === SET_CURRENT_SCORE && action.payload.data > store.getState().scoreReducer.highest) {
    store.dispatch({type: SET_HIGH_SCORE, payload: {data: store.getState().scoreReducer.current}});
  }
  return next(action);
};

const middleware = applyMiddleware(checker, logger());

const store = createStore(reducer, middleware);

store.subscribe(function() {

  var star = "";
  // var rep = store.getState();
  // for(var i = 0; i < rep; i++) {
  //   star = star + "*";
  // }
  // console.log(star, store.getState());
  // if(rep > 0) {
  //   store.dispatch({type: "DEC", payload: {value: 1}});
  // }
});

// store.dispatch({type: "INC", payload: {value: 1}});
// store.dispatch({type: "DEC", payload: {value: 10}});
store.dispatch({type: SET_NAME, payload: {data: "timothy dicky"}});
store.dispatch({type: SET_GENDER, payload: {data: "Male"}});
store.dispatch({type: SET_CURRENT_SCORE, payload: {data: 50}});
store.dispatch({type: SET_CURRENT_SCORE, payload: {data: 150}});
