import {createStore} from "redux";
import cookieReducer from './cookieReducer';



const store = createStore(cookieReducer);

store.subscribe(() => {
    console.log(store.getState());
    updateCookieUI();
})

const addCookie = document.querySelector('#addCookie');
const removeCookie = document.querySelector('#removeCookie');
const cookieCount = document.querySelector('#cookie_count');


function addCookieHandler(){
    store.dispatch({type:'cookie/add'})
}

function removeCookieHandler(){
    store.dispatch({type:'cookie/remove'})
}

addCookie.addEventListener('click',addCookieHandler);
removeCookie.addEventListener('click',removeCookieHandler)

function updateCookieUI(){
    const state = store.getState();
    cookieCount.textContent = state.value;
}

updateCookieUI()