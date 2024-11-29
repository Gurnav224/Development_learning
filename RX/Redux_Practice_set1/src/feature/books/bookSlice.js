import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = 'http://localhost:3000';

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
    const response = await axios.get(`${apiUrl}/books`);
    return response.data
})

export const deleteBookAsync = createAsyncThunk('deleteBook', async (bookId , {rejectWithValue}) => {
    try {
        const response = await axios.delete(`${apiUrl}/books/${bookId}`);
        return response.data;
    } catch (error) {
     return   rejectWithValue(error)
    }
})


export const addBookAsync = createAsyncThunk('addNewBook', async (newBook , {rejectWithValue}) => {
    try {
        const response = await axios.post(`${apiUrl}/books`, newBook);
        console.log(response.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const bookSlice = createSlice({
    name:"books",
    initialState:{
        books:[],
        status:'idle',
        error:null
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(fetchBooks.pending,(state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchBooks.fulfilled, (state , action) => {
            state.status = 'success'
            state.books = action.payload
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.status = 'error'
        })
        builder.addCase(deleteBookAsync.pending, (state ) =>{
            state.status = 'loading'
        })
        builder.addCase(deleteBookAsync.fulfilled, (state , action) => {
            state.status = 'success'
            state.books = state.books.filter((book) => book._id !== action.meta.arg)
        })
        builder.addCase(deleteBookAsync.rejected, (state) => {
            state.status = 'error'
        })
    }
})


export default bookSlice.reducer;