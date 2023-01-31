import { createSlice } from '@reduxjs/toolkit';

export const authorizationSlice = createSlice({
  name: 'users',

  initialState: [
    {
      id: 1673523146112,
      name: 'Wednesday Adams',
      email: 'adams.wd@mail.com',
      password: 'Adams!123wednesday',
      isAdmin: false,
    },
  ],

  reducers: {
    registerUser(state, action) {
      const id = Date.now();
      const { name, email, password } = action.payload;

      return [...state, { id, name, email, password, isAdmin: false }];
    },
  },
});

export const signInUserSlice = createSlice({
  name: 'user',
  initialState: {},

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
