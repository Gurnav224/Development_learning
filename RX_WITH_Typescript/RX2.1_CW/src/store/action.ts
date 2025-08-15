import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT, type CounterActionTypes } from "./actionTypes";


export const increment = ():CounterActionTypes => ({
    type:INCREMENT
})

export const decrement = ():CounterActionTypes => ({
    type: DECREMENT
})


export const incrementByAmount = (amount: number): CounterActionTypes => ({
    type: INCREMENT_BY_AMOUNT,
    payload: amount
})
