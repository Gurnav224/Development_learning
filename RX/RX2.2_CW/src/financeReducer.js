import { ADD_EXPENSE, ADD_INCOME } from "./actions"

const initalState = {
    income:0,
    expense:0
}

function financeReducer(state = initalState, action){
    switch(action.type){
        case ADD_INCOME:
            return {
                ...state,
                income:state.income + action.payload
            }
        case ADD_EXPENSE:
            return {
                ...state,
                expense:state.expense + action.payload
            }
        default:
            return state
    }
}


export default financeReducer