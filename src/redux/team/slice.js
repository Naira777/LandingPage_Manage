import { createSlice } from "@reduxjs/toolkit";
import { API } from "../API";

const TeamSlice = createSlice({
  name: "Blog",
  initialState: {
    teamList: [],
    jobList: []
  },
  extraReducers: (builder) => {
    builder
    .addCase(API.getTeamList.fulfilled, (state, action) => {
       state.teamList = action.payload.data.data;
    })
    .addCase(API.getJobList.fulfilled, (state, action) => {
      state.jobList = action.payload.data.data;
    })
  },
});

export default TeamSlice;