import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authorizationSlice, signInUserSlice } from './usersSlice';

const rootReducer = combineReducers({
  users: authorizationSlice.reducer,
  loggedUser: signInUserSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
