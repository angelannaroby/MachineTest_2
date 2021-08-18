import { applyMiddleware, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();
const initialState = {};
const middleWare = [thunk, routerMiddleware(history)];
  
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
