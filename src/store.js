import { createStore } from "redux";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { messageReducer } from "./reducers/messageReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  users: userReducer,
  message: messageReducer,
});

export const store = createStore(reducers, composeWithDevTools());
