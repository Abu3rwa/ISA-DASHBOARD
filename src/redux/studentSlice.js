import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allStudents: [],
  studentData: [],
  loading: false,
  error: null,
  msg: null,
};
const parentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    fetchStudentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStudentsSuccess(state, action) {
      state.studentData = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchStudentsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    registerStudentStart(state) {
      state.loading = true;
      state.error = null;
    },
    registerStudentSuccess(state, action) {
      state.msg = action.payload;
      state.loading = false;
      state.error = null;
    },
    registerStudentFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchStudentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStudentsSuccess(state, action) {
      state.allStudents = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchStudentsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerStudentStart,
  registerStudentSuccess,
  registerStudentFailure,
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
} = parentSlice.actions;

export default parentSlice.reducer;
