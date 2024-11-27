import { configureStore } from "@reduxjs/toolkit";
import {studentSlice} from '../features/students/studentSlice';
import { teacherSlice} from '../features/teachers/teacherSlice'

export default configureStore({
    reducer:{
        students:studentSlice.reducer,
        teachers:teacherSlice.reducer
    }
})