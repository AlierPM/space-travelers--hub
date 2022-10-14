import { configureStore } from "@reduxjs/toolkit";
import rocketSlice from "../rocket/rocketSlice";

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
  },
});

export default store;
