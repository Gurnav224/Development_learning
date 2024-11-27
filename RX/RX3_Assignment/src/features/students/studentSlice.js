import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../api/api";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/students`);
    return response.data;
  }
);

export const addStudentAsync = createAsyncThunk(
  "students/addStudent",
  async (newStudent, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/students`,
        newStudent
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const updateStudentAsync = createAsyncThunk(
  "students/updateStudent",
  async ({ studentId, updatedStudent }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/students/${studentId}`,
        updatedStudent
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "students/deleteStudent",
  async (studentId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/students/${studentId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    filteredStudents: [],
    status: "idle",
    error: null,
    filter: "All",
    sortBy: "name",
    schoolStats:{},
    topStudent:""
  },
  reducers: {
    setFilter(state, action) {
      state.students =
        action.payload === state.filter
          ? state.filteredStudents
          : state.filteredStudents.filter(
              (student) => student.gender === action.payload
            );
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
      const sortkey = state.sortBy;

      state.students = [...state.students].sort((a, b) => {
        if (sortkey === "marks" || sortkey === "attendance") {
          // descending order
          return b[sortkey] - a[sortkey];
        } else if (sortkey === "name") {
          // alphabeticall order
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
    },
    updateSchoolStats(state , action) {
      state.schoolStats = action.payload
    },
    setTopStudent(state , action){
      state.topStudent = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "success";
        state.students = action.payload;
        state.filteredStudents = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { setFilter, setSortBy , updateSchoolStats , setTopStudent} = studentSlice.actions;

export default studentSlice.reducer;
