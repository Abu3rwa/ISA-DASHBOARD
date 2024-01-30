import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./parentSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    parents: parentSlice,
    user: userSlice,
  },
});
export default store;
