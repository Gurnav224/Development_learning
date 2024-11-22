import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[
            {
                postId:"POO1",
                caption:"Learning Redux tookit",
                likes:22,
                user:{
                    userId:"U123",
                    name:"John Doe"
                }
            },
            {
                postId:"POO2",
                caption:"It is fun to learn redux toolkit",
                likes:33,
                user:{
                    userId:"U234",
                    name:"John Cena"
                }
            }
        ]
    },

    reducers:{
        likeButtonPressed:(state, action) => {
            const postIndex = state.posts.findIndex((post) => post.postId === action.payload);
            state.posts[postIndex].likes =  state.posts[postIndex].likes +1
        }
    }
})

export const {likeButtonPressed} = postSlice.actions;

export default postSlice.reducer;