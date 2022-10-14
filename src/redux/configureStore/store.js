import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import dragonReducer from "../dragon/dragon";
import rocketSlice from "../rocket/rocketSlice";

const store = configureStore({
  reducer: {
    dragon: dragonReducer,
    rockets: rocketSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
