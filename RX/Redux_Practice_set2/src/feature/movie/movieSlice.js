import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const api_url = "http://localhost:5000"

export const fetchMovies =  createAsyncThunk("movies/fetchMovies", async () => {
   const response = await axios.get(`${api_url}/movies`);
   return response.data;
});

export const deleteMovieAsync = createAsyncThunk("movies/deleteMovie", async (movieId , {rejectWithValue}) => {
    try {
        const response = await axios.delete(`${api_url}/movies/${movieId}`);
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred")
    }
});

export const addMovieAsync = createAsyncThunk("movies/addMovie", async (newMovie , {rejectWithValue}) => {
    try {
        const response = await axios.post(`${api_url}/movies`,newMovie);
        console.log(response.data)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred")
    }
})

export const updateMovieAsync = createAsyncThunk("movies/updateMovie", async ({updatedMovie, movieId}, {rejectWithValue}) => {
    try {
        const response = await axios.put(`${api_url}/movies/${movieId}`, updatedMovie);
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred")
    }
})

export const movieSlice = createSlice({
    name:'movie',
    initialState:{
        movies:[],
        status:"idle",
        error:null
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchMovies.fulfilled, (state , action) => {
            state.status = 'success';
            state.movies = action.payload;
        })
        builder.addCase(fetchMovies.rejected, (state , action ) => {
            state.status = 'error';
            state.error = action.error
        })
        builder.addCase(deleteMovieAsync.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(deleteMovieAsync.fulfilled , (state , action) => {
            state.status = 'success';
            state.movies = state.movies.filter((movie) => movie._id !== action.meta.arg)
        })
        builder.addCase(deleteMovieAsync.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error
        })
    }
})


export default movieSlice.reducer;