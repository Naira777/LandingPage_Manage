import { createSlice } from "@reduxjs/toolkit";
import { API } from "../API";

const AuthorizationSlice = createSlice({
  name: "Authorization",
  initialState: {
    error: null,
    isAuth: "",
  },
  reducers: {
    isAuthentication: (state, action) => {
      state.isAuth = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(API.getAuthorization.fulfilled, (state, action) => {
      state.admin = action.payload.data.data;
      localStorage.setItem("admin", action.payload.data.data);
    });
  },
});

export default AuthorizationSlice;
export const {isAuthentication} = AuthorizationSlice.actions;
