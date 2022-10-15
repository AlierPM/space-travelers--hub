import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import dragonReducer from "../dragon/dragon";
import rocketSlice from "../rocket/rocketSlice";
import missionsReducer from "../mission/missionSlice";

const store = configureStore({
  reducer: {
    dragon: dragonReducer,
    rockets: rocketSlice,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
