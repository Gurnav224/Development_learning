import {createStore} from "redux";
import financeReducer from './financeReducer';

export default createStore(financeReducer);