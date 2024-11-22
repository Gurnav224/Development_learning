import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("https://social-media-cw-server-student-neog.replit.app/posts");
  console.log(response);
   return response.data
})


export const postSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        status:"idle",
        error:null
    },

    reducers:{
        likeButtonPressed:(state, action) => {
            const postIndex = state.posts.findIndex((post) => post.postId === action.payload);
            state.posts[postIndex].likes =  state.posts[postIndex].likes +1
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'success';
            state.posts = action.payload.posts
        });
        builder.addCase(fetchPosts.rejected, (state , action) => {
            state.status = 'error';
            state.error = action.payload.message
        })
    }
})

export const {likeButtonPressed} = postSlice.actions;

export default postSlice.reducer;