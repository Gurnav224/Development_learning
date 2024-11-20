import {createStore , applyMiddleware} from "redux";
import financeReducer from './financeReducer';
import loggerMiddleware from "./loggerMiddleware";


const store = createStore(financeReducer , applyMiddleware(loggerMiddleware));

export default store