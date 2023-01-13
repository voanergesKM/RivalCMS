import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { addPageSlice } from './addFilesSlice';
import { authorizationSlice, signInUserSlice } from './usersSlice';

const rootReducer = combineReducers({
  users: authorizationSlice.reducer,
  loggedUser: signInUserSlice.reducer,
  sitePages: addPageSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
