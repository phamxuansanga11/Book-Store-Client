import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    book: [],
    sliderBook: [],
    loading: false,
    error: false,
  },
  reducers: {
    getStarted: (state) => {
      state.loading = true;
    },
    getError: (state) => {
      state.loading = false;
      state.error = true;
    },
    listBook: (state, action) => {
      state.book = action.payload;
      state.loading = false;
      state.error = false;
    },
    sliderBook: (state, action) => {
      state.sliderBook = action.payload;
    },
  },
});

export const { getStarted, getError, listBook, sliderBook } = bookSlice.actions;
export default bookSlice.reducer;
