import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pageSlice } from './addPagesSlice';
import { filesSlice } from './filesSlice';
import { authorizationSlice, signInUserSlice } from './usersSlice';

const rootReducer = combineReducers({
  users: authorizationSlice.reducer,
  loggedUser: signInUserSlice.reducer,
  sitePages: pageSlice.reducer,
  siteFiles: filesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
