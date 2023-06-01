import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    loginStart: (state, action) => {
      console.log("loginStart");
    },
  },
});

export const { loginStart } = authSlice.actions; 

export default authSlice.reducer; 