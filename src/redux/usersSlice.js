import { createSlice } from '@reduxjs/toolkit';

export const authorizationSlice = createSlice({
  name: 'users',

  initialState: [],

  reducers: {
    registerUser(state, action) {
      const id = Date.now();
      const { name, email, password } = action.payload;

      return [...state, { id, name, email, password }];
    },
  },
});

export const signInUserSlice = createSlice({
  name: 'user',
  initialState: { name: '', email: '', isLoggedIn: false, isAdmin: false },

  reducers: {
    signInUser(_, action) {
      //   const admin = Math.random() > 0.5;
      const { name, email } = action.payload;

      return { name, email, isLoggedIn: true, isAdmin: true };
    },
  },
});

export const { registerUser } = authorizationSlice.actions;
export const { signInUser } = signInUserSlice.actions;
