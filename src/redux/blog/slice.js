import { createSlice } from "@reduxjs/toolkit";
import { API } from "../API";

const BlogSlice = createSlice({
  name: "Blog",
  initialState: {
    blogCategory: [], 
    blog: [],
  },
  extraReducers: (builder) => {
    builder
    .addCase(API.getBlogCategory.fulfilled, (state, action) => {
       state.blogCategory = action.payload.data.data;
    })
    .addCase(API.getBlog.fulfilled, (state, action) => {
      state.blog = action.payload.data.data.data;
    })
  },
});

export default BlogSlice;
