import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from '../features/tasks/taskSlice';

export default configureStore({
    reducer:{
        tasks:taskSlice.reducer
    }
})