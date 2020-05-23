import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import setAuthToken from "./utils/setAuthToken";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//setting up a store subscription listener
//storing the users token in localStorage
//initializing current state from redux store for subscription comparison
//to prevent undefined error

let currentState = store.getState();

store.subscribe(() => {
  //keeping track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();

  //if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;
