import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authenticationSlice";
import booksReducer from "../features/books/booksSlice";

export const store = configureStore({

    reducer: {
      authentication: authReducer,
      books: booksReducer,
    },
  }); 
  