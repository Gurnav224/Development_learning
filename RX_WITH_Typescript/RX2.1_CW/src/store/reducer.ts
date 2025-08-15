
import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT, type CounterActionTypes } from './actionTypes'


export  interface CounterState {
    value:number
}


export const initialState:CounterState = {
    value:0
}


export const counterReducer = (
    state = initialState,
    action:CounterActionTypes
):CounterState => {
    switch(action.type){
        case INCREMENT:
            return {value:state.value + 1 }
        case DECREMENT:
            return {value:state.value - 1 }
        case INCREMENT_BY_AMOUNT:
            return {value:state.value + action.payload }
        default:
            return state
    }
}