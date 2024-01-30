import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "",
  loading: false,
  token: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess(state, action) {
      state.message = action.payload.message;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    loginUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
