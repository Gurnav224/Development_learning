

import { applyMiddleware, createStore } from "redux";
import financeReducer from "./reducers";

import {thunk} from "redux-thunk";


const store = createStore(financeReducer  ,applyMiddleware(thunk));


export default store;