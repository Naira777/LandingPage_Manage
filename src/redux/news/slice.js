import { createSlice } from "@reduxjs/toolkit";
import { API } from "../API";

const NewsSlice = createSlice({
  name: "News",
  initialState: {
    newsList: [],
    newsCategory:[]
  },
  extraReducers: (builder) => {
    builder
    .addCase(API.getNewsList.fulfilled, (state, action) => {
       state.newsList = action.payload.data.data.data;
    })
    .addCase(API.getNewsCategory.fulfilled, (state, action)=>{
       state.newsCategory = action.payload.data.data;
    })
    
  },
});

export default NewsSlice;
export const {imageFile} = NewsSlice.actions;
