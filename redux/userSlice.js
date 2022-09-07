import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    accessToken: "",
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    clearAccessToken: (state) => {
      state.accessToken = "";
    },
  },
});

export const { login, clearAccessToken } = userSlice.actions;
export default userSlice.reducer;
