/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable */
// actions type
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/dragons';
const LOAD_DRAGONS = 'LOAD_DRAGONS';
const BOOK_DRAGONS = 'BOOK_DRAGONS';
const CANCEL_BOOKING = 'CANCEL_DRAGONS';

const initialState = {
  dragons: [],
  isLoading: false,
};

const dragonReducer = (state = initialState, action) => {
  const { type, paylaod } = action;
  switch (type) {
    case LOAD_DRAGONS:
      return {
        ...state,
        isLoading: false,
        dragons: paylaod,
      };
    case BOOK_DRAGONS:
      return {
        ...state,
        isLoading: false,
        dragons: state.dragons.map((dragon) =>
          dragon.id !== paylaod ? dragon : { ...dragon, reserved: true }
        ),
      };
    case CANCEL_BOOKING:
      return {
        ...state,
        isLoading: false,
        dragons: state.dragons.map((dragon) =>
          dragon.id !== paylaod ? dragon : { ...dragon, reserved: false }
        ),
      };
    default:
      return state;
  }
};
//Action Creator
export const loadDragons = createAsyncThunk(
  LOAD_DRAGONS,
  async (args, { dispatch }) => {
    try {
      const { data } = await axios.get(BASE_URL);
      const dragons = data.map((dragon) => ({
        id: dragon.id,
        flickr_images: dragon.flickr_images,
        name: dragon.name,
        type: dragon.type,
        reserved: false,
      }));
      dispatch({
        type: LOAD_DRAGONS,
        paylaod: dragons,
      });
    } catch (error) {
      console.error(error.mssage);
    }
    return args;
  }
);

export const bookDragons = (id) => (dispatch) => {
  dispatch({
    type: BOOK_DRAGONS,
    paylaod: id,
  });
};

export const cancelDragons = (id) => (dispatch) => {
  dispatch({
    type: CANCEL_BOOKING,
    paylaod: id,
  });
};

export default dragonReducer;
