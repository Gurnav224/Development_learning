import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../features/posts/postSlice";

export default  configureStore({
    reducer:{
        posts:postSlice.reducer
    }
})