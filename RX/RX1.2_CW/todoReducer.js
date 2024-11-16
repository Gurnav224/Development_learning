import { ADD_TODO, REMOVE_TODO } from "./actions";

const initialState = { todos: [] };

function todoReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((val, index) => index != action.payload),
      };
    default:
      return state;
  }
}

export default todoReducer;
