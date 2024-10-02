import {createStore} from "redux";

import cookieReducer from "./cookieReducer";

const store = createStore(cookieReducer);

store.subscribe(() =>{
  udpateCookieCount();
})



const addCookie = document.querySelector('#addCookie')
const removeCookie = document.querySelector('#removeCookie')
const cookieCount = document.querySelector('#cookieCount');



const addCookieHandler = () => {
  store.dispatch({type:"cookies/added"})

}

const removeCookieHandler  = () => {
  store.dispatch({type:"cookies/remove"})

}


addCookie.addEventListener('click',addCookieHandler);
removeCookie.addEventListener('click',removeCookieHandler);


const udpateCookieCount = () => {
  const state = store.getState();
  cookieCount.textContent = state.value;
}

udpateCookieCount()