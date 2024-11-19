import { createStore } from "redux";
import taskReducer from "./taskReducer";
import { addTask, calculateTotalTasks, removeTask, toggleTask } from "./actions";

const store = createStore(taskReducer);

const taskList = document.querySelector("#task_list");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const addTaskBtn = document.querySelector("#add_task_button");
const totalTasks = document.querySelector("#total_tasks");
const removeTaskBtn = document.querySelector('#remove_task_button');
const taskId = document.querySelector('#task_id');


const tasks = [
  { id: 1, title: "Task 1", description: "task note 1", completed: false },
  { id: 2, title: "Task 2", description: "task note 2", completed: true },
  { id: 3, title: "Task 3", description: "task note 3", completed: false },
];

// Add tasks to the state
tasks.forEach((task) => {
  store.dispatch({ type: "task/added", payload: task });
});

// function to add new Task and pass data action payload
const addTaskHandler = () => {
  const newTask = {
    id: store.getState().tasks.length + 1,
    title: title.value,
    description: description.value,
  };
  store.dispatch(addTask(newTask));
  store.dispatch(calculateTotalTasks());
};
addTaskBtn.addEventListener("click", addTaskHandler);


// function to remove task 

function removeTaskById(){
    store.dispatch(removeTask(parseInt(taskId.value)))  
    console.log(store.getState())  
}

removeTaskBtn.addEventListener('click',removeTaskById)

// Render tasks in the UI
function renderTasks(tasks) {
  taskList.innerHTML = tasks
    .map(
      (task) => `
          <li>
            <input 
              type="checkbox" 
              ${task.completed ? "checked" : ""}
              onchange="toggleTaskStatus(${task.id})"
            />
            ${task.id} - ${task.title} - ${task.description} 
            ${task.completed ? " (completed)" : ""}
          </li>
        `
    )
    .join("");
}

// function to render total number of task
function renderTotalTask(total) {
  totalTasks.innerHTML = `Total Task : ${total}`;
}

// Subscribe to store changes and render updated tasks
store.subscribe(() => {
  const state = store.getState();
  renderTasks(state.tasks);
  renderTotalTask(state.totalTasks);
});

renderTasks(store.getState().tasks);
renderTotalTask(store.getState().totalTasks);

function toggleTaskStatus(taskId) {
  store.dispatch(toggleTask(taskId));
}

window.toggleTaskStatus = toggleTaskStatus;
