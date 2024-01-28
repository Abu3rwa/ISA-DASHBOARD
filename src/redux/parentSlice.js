import { createSlice } from "@reduxjs/toolkit";

export const parentSlice = createSlice({
  name: "parent",
  initialState: {
    parentData: { phone: "", email: "", name: "", address: "", gender: "" },
    loading: false,
    error: false,
  },
  reducers: {
    create: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.gender = action.payload.gender;
      state.phone = action.payload.phone;
    },
  },
});
export const { create } = parentSlice.actions;
export default parentSlice.reducer;
