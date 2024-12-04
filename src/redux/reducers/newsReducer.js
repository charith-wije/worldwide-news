import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "../actions/newsAction";

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.news = action.payload;
    });
    builder.addCase(getNews.rejected, (state, action) => {
      state.error = "Server error";
      state.isLoading = false;
    });
  },
});

export default newsSlice.reducer;
