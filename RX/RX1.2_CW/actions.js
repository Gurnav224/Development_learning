

export const ADD_TODO = "todos/added";
export const REMOVE_TODO = "todos/remove";


export const addTodo = (text) => ({
    type:ADD_TODO,
    payload:text
})


export const removeTodo = (index) => ({
    type:REMOVE_TODO,
    payload:index
})