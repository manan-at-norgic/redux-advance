import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootrReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
