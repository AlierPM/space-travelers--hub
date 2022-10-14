import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rocketReducer } from './RocketActions/RocketAction';
import { misssionReducer } from './MissionsActions/MissionAction';
import profileReducer from './profile/profileMission';

const persistConfig = {
  key: 'main-root',
  storage,
};

const reducer = combineReducers({
  rockets: rocketReducer,
  mission: misssionReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore(
  { reducer: persistedReducer },
  applyMiddleware(thunk),
);

const persistor = persistStore(store);
export { persistor };
export default store;
