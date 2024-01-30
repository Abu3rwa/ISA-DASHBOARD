import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  parentData: [],
  loading: false,
  error: null,
};
const parentSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    fetchParentDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchParentDataSuccess(state, action) {
      state.parentData = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchParentDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchParentDataStart,
  fetchParentDataSuccess,
  fetchParentDataFailure,
} = parentSlice.actions;

export default parentSlice.reducer;
