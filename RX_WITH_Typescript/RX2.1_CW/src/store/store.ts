import { legacy_createStore } from "redux";
import { counterReducer } from "./reducer";


export const store = legacy_createStore(counterReducer);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;