import { createAsyncThunk } from '@reduxjs/toolkit';

const initalstate = [];

// API url
const url = 'https://api.spacexdata.com/v3/missions';

// create action type
const GET_MISSION = 'space-travelers--hub/missions/GET_MISSION';

// create actions
export const getMission = createAsyncThunk(GET_MISSION, async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const missions = data.map((item) => ({
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
      joined: false,
    }));
    return { mission: missions };
  } catch (err) {
    return err;
    // return 'Mission data failed';
  }
});

// create a redudcer
export const misssionReducer = (state = initalstate, action) => {
  switch (action.type) {
    case 'space-travelers--hub/missions/GET_MISSION/fulfilled':
      return action.payload.mission;
    default:
      return state;
  }
};
