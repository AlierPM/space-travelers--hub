/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  rockets: [],
  error: "",
};
export const fetchRockets = createAsyncThunk("user/fetchUsers", () =>
  axios
    .get("https://api.spacexdata.com/v3/rockets")
    .then((response) => response.data)
);
// Creating rocket slice.
const rocketSlice = createSlice({
  name: "rockets",
  initialState,
  // Reducers for reserving and canceling a rocket.
  reducers: {
    rocketsReserve(state, action) {
      const id = action.payload;
      const ExistingRockets = state.rockets.find((rocket) => rocket.id === id);
      if (ExistingRockets) {
        ExistingRockets.reserved = true;
      }
    },
    rocketsCancel(state, action) {
      const id = action.payload;
      const ExistingRockets = state.rockets.find((rocket) => rocket.id === id);
      if (ExistingRockets) {
        ExistingRockets.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = false;
      state.rockets = [];
      state.error = action.payload;
    });
  },
});

export default rocketSlice.reducer;
export const { rocketsReserve, rocketsCancel } = rocketSlice.actions;
