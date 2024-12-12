import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    updateBookmark: (state, action) => {
      const exists = state.bookmarks.some(
        (item) => item.item.publishedAt === action.payload.item.publishedAt
      );

      if (exists) {
        state.bookmarks = state.bookmarks.filter(
          (item) => item.item.publishedAt !== action.payload.item.publishedAt
        );
      } else {
        state.bookmarks.push(action.payload);
      }
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (item) => item.item.publishedAt !== action.payload.item.publishedAt
      );
    },
  },
});

export const { updateBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
