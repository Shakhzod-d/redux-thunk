import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { usersReducer } from "./Reducers/usersReducer";

const reducers = combineReducers(
  {
    users: usersReducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const Store = createStore(reducers, applyMiddleware(thunk));
