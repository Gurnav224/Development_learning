import {createStore}  from "redux";

let initialState = {
    counter:0
}

const counterReducer = (state = initialState , action) => {
    switch(action.type){
        case "add":
            return {
                ...state,
                counter:state.counter +1
            }
        case "minus":
            return {
                ...state,
                counter:state.counter -1
            }
        default:
            return state
    }
}


export default createStore(counterReducer)