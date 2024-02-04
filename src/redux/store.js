import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./parentSlice";
import userSlice from "./userSlice";
import studentSlice from "./studentSlice";

export const store = configureStore({
  reducer: {
    parents: parentSlice,
    user: userSlice,
    students: studentSlice,
  },
});
export default store;
