
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../api/api";

export const fetchTeachers = createAsyncThunk("teachers/fetchTeachers", async ()=> {
    const response = await axios.get(`${API_BASE_URL}/teachers`);
    return response.data;
})

export const addTeacherAsync =  createAsyncThunk("teachers/addTeacher", async (newTeacher , {rejectWithValue})=> {
    try {
        const response = await axios.post(`${API_BASE_URL}/teachers`, newTeacher);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong")
    }
})

export const updateTeacherAsync = createAsyncThunk("teachers/updateTeacher", async ({teacherId, updateTeacher }, {rejectWithValue}) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/teachers/${teacherId}`,updateTeacher);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Something went wrong")
  }
} )


export const deleteTeacherAsync = createAsyncThunk("teachers/deleteTeacher", async (teacherId, {rejectWithValue}) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/teachers/${teacherId}`);
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || "Something went wrong")
  }
})

export const teacherSlice = createSlice({
    name:"teacher",
    initialState:{
        teachers:[],
        status:"idle",
        error:null,
        teacherStats:{}
    },
    reducers:{
    
     updateTeacherStats:(state, action) => {
      state.teacherStats = action.payload;
     }
    },
    extraReducers:(builder) => {
      builder.addCase(fetchTeachers.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "success";
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected , (state , action) => {
        state.status = "error";
        state.error = action.payload
      })
    }
   
});

export const {updateTeacherStats} = teacherSlice.actions;



export default teacherSlice.reducer;