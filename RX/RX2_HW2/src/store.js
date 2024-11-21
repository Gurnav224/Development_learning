import {createStore} from "redux";
import bookReducer from './bookReducer';
import { applyMiddleware } from "redux";
import loggerMiddleware from "../loggerMiddleware";



const store = createStore(bookReducer, applyMiddleware(loggerMiddleware));

export default store