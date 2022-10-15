import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY = 'space-travelers--hub/src/RocketActions/DISPLAY';
const STATUS = 'space-travelers--hub/src/RocketActions/DISPLAY';
const initialState = [];

export const ChangeStatus = (id) => ({
  type: STATUS,
  id,
});

export const fetchRockets = createAsyncThunk(DISPLAY, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  return { rocket: rockets };
});

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${DISPLAY}/fulfilled`:
      // eslint-disable-next-line
      console.log('state: ', state);
      return action.payload.rocket;
    case STATUS: {
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        if (rocket.reserved === true) {
          return { ...rocket, reserved: false };
        }
        return { ...rocket, reserved: true };
      });
    }
    default:
      return state;
  }
};
