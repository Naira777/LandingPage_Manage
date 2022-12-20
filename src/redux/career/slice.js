import { createSlice } from "@reduxjs/toolkit";
import { API } from "../API";

const CareerSlice = createSlice({
  name: "Career",
  initialState: {
   dataCreate: {}, 
   dataUpdate: {}, 
   errors: [],
   careerList: [],
   categoryList: [],
   OneCareer: {},
   careerCvList: [],
   careerCv: {}

  },
  extraReducers: (builder) => {
    builder
    .addCase(API.createCareer.fulfilled, (state, action) => {
       state.dataCreate = action.payload.data.data;
    })
     .addCase(API.createCareer.rejected, (state, action) => {
       state.errors = action.payload;
    })
    .addCase(API.updateCareer.fulfilled, (state, action) => {
      state.dataUpdate = action.payload.data.data;
    })
      .addCase(API.getCareerList.fulfilled, (state, action) => {
      state.careerList = action.payload.data.data;
    })
    .addCase(API.getCareerCategoryList.fulfilled, (state, action) => {
      state.categoryList = action.payload.data.data;
    }) 
    .addCase(API.getOneCareer.fulfilled, (state, action) => {
      
       state.OneCareer = action.payload.data[0];
    }) 
      .addCase(API.getCareerCv.fulfilled, (state, action) => {
      state.careerCv = action.payload.data.data;
     
    }) 
      .addCase(API.getCareerCvList.fulfilled, (state, action) => {
      state.careerCvList = action.payload.data.data; 
      console.log(action.payload.data.data)
    }) 
  },
});

export default CareerSlice;