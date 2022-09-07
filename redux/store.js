import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    book: bookSlice,
    user: userSlice,
  },
});
