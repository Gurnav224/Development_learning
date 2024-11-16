

const intialState = {value:0};



function reducer(state = intialState , action ){
    switch(action.type){
        case "cookie/add":
            return {
                value:state.value + 1
            }
        case "cookie/remove":
            return {
                value : state.value -1
            }
        default:
            return state
    }
}

export default reducer