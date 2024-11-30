import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "../feature/movie/movieSlice";

export const store = configureStore({
    reducer:{
        movies:movieSlice.reducer
    }
})