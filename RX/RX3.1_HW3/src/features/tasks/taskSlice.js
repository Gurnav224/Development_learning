import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get("https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks");
  return response.data;
})

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks:[],
    state:"idle",
    error:null
  },
  reducers: {
    toggleTaskUpdate:(state , action) => {
      const taskId  = action.payload;

      console.log('taskId',taskId)

     state.tasks.forEach((day) => {
      const tasktoUpdate = day.tasks.find((task) => task.taskId === taskId);
      if(tasktoUpdate){
       tasktoUpdate.taskStatus =  tasktoUpdate.taskStatus === "Completed" ? "Pending" : "Completed"
      }
     })


    }
  },
  extraReducers:(builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = 'loading';
    }),
    builder.addCase(fetchTasks.fulfilled, (state , action) => {
      state.status = 'success';
      state.tasks = action.payload.tasks
    }),
    builder.addCase(fetchTasks.rejected , (state , action) => {
      state.status = 'error';
      state.reducer = action.payload.message
    })
  }
});

export const {toggleTaskUpdate} = taskSlice.actions

export default taskSlice.reducer;
