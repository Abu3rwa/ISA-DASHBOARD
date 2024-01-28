import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./parentSlice";

export const store = configureStore({
  reducer: {
    parent: parentSlice,
  },
});
export default store;
