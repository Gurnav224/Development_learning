import { createStore } from "redux";
import todoReducer from "./todoReducer";
import { addTodo, removeTodo } from "./actions";

const store = createStore(todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("store subscribed", store.getState()), 
  taskListDisplay();
});

const inputText = document.querySelector("#input_text");
const addBtn = document.querySelector("#add_btn");
const taskList = document.querySelector("#task_list");

const addTodoHandler = () => {
  const todoValue = inputText.value;
  if (todoValue) {
    store.dispatch(addTodo(todoValue));
  }
};

window.removeTodoHandler = (index) => {
  store.dispatch(removeTodo(index));
};

addBtn.addEventListener("click", addTodoHandler);

const taskListDisplay = () => {
  const tasks = store.getState();
  taskList.innerHTML = tasks.todos
    .map((task, index) => {
      return `<li>${index}
     ${task}
     <button onClick="removeTodoHandler(${index})">Remove</button>
    </li>`;
    })
    .join(" ");
};

taskListDisplay();
