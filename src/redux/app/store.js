import { createStore, applyMiddleware } from "redux";
import { thunk as reduxThunk } from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;