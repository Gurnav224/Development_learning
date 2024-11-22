
const initialState = {
    inventory:[],
    removed_items:[],
    remaining_items:[]
}


function reducer(state = initialState, action){
    switch(action.type){
        case "ADD_ITEM":
            return {
                ...state,
                inventory:[...state.inventory , action.payload]
            }
        case 'FETCH_INVENTORY':
            return {
                ...state,
                inventory:action.payload
            }
        case "REMOVED_ITEMS":
            return {
                ...state,
                removed_items:[...action.payload]
            }
        default :
        return state
    }
}


export default reducer