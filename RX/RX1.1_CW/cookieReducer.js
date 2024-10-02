
const initialState = {value : 0};


const cookieReducer = (state = initialState, action) => {
    switch(action.type){
        case "cookies/added":
            return {value:state.value + 1};
        case "cookies/remove":
        return {value : state.value -1}
        default:
            return state
    }
}

export default cookieReducer;