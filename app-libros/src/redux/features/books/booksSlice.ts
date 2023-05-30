import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      console.log("addBook");
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
