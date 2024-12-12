import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../reducers/newsReducer.js";
import authReducer from "../reducers/authReducer.js";
import bookmarkReducer from "../reducers/bookmarkReducer.js";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
    bookmark: bookmarkReducer,
  },
});
