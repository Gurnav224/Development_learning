
import {createStore} from "redux";

import todoReducer from "./todoReducer";
import { addTodo , removeTodo } from "./actions";

const store = createStore(todoReducer);


store.subscribe(() => {
  updateTodolist()
});


const todoInput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#add_btn');
const taskList = document.querySelector('#tasklist');



const addTodoHandler = () => {
  const todoValue = todoInput.value ;
  if(todoValue){
    taskList.innerHTML = todoInput.value;
    store.dispatch(addTodo(todoValue))
  }
}

addBtn.addEventListener('click',addTodoHandler);

window.removeHandler = (index) => {
  store.dispatch(removeTodo(index))
}

const updateTodolist = () => {
  const state = store.getState();

  const todo = state.todos.map((todo , index) => `<li>
  ${todo}
  <button onClick="removeHandler(${index})">Remove</button>
  </li>`).join('')

  console.log(todo)
 
  taskList.innerHTML = todo


}

updateTodolist()