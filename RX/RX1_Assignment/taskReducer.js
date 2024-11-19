import { ADD_TASK, CALCULATE_TOTAL_TASKS, REMOVE_TASK, TOGGLE_TASK } from "./actions";

const initalState = {tasks: [],totalTasks:0};

function taskReducer(state = initalState, action){
  console.log(action.type,action.payload)
  switch(action.type){
    case ADD_TASK:
      return {
        ...state,
        tasks:[...state.tasks,action.payload],
        totalTasks: state.totalTasks + 1,

      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks:state.tasks.filter((task) => task.id !== action.payload),
        totalTasks: state.totalTasks - 1,

      }
    case TOGGLE_TASK:
      return {
        ...state,
        tasks:state.tasks.map((task) => 
        task.id === action.payload ? {...task,completed:!task.completed} : task
      ) 
      }
    case CALCULATE_TOTAL_TASKS:
      console.log('calculate total task',state)
      return {
        ...state,
        totalTasks:state.tasks.length
      }
      default:
        return state
  }
}

export default taskReducer;