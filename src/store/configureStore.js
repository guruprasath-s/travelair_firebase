import { createStore, combineReducers, applyMiddleware } from "redux";
import flights from "../reducers/flights";
import authReducer from "../reducers/auth";
import thunk from "redux-thunk";

const configureStore = () => {
  const store = createStore(
    combineReducers({ flights: flights,auth: authReducer }),
    applyMiddleware(thunk)
  );
  return store;
};
export { configureStore as default };
