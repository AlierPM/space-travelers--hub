import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import dragonReducer from '../dragon/dragon';

const store = configureStore({
  reducer: {
    dragon: dragonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
