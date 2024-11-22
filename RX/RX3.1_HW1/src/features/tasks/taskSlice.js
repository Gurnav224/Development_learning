import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: [
      {
        date: "15/07/2024",
        tasks: [
          {
            taskId: "t001",
            title: "Get Groceries from the market",
            status: "Pending",
          },
          {
            taskId: "t002",
            title: "Go to Gym.",
            status: "Completed",
          },
          {
            taskId: "t003",
            title: "Water the plants",
            status: "Completed",
          },
        ],
      },
      {
        date: "16/07/2024",
        tasks: [
          {
            taskId: "t004",
            title: "Go to the park.",
            status: "Completed",
          },
          {
            taskId: "t005",
            title: "Get my room cleaned.",
            status: "Pending",
          },
        ],
      },
    ],
  },
  reducers: {},
});

export default taskSlice.reducer;
