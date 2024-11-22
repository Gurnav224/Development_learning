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
    reducers:{}
})


export default postSlice.reducer;