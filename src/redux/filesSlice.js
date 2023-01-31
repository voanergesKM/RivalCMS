import { createSlice } from '@reduxjs/toolkit';

export const filesSlice = createSlice({
  name: 'siteFiles',

  initialState: [
    {
      id: 1674056192236.6887,
      name: 'seafood.jpg',
      type: 'image/jpeg',
      uploaded: 1674056192236,
    },
    {
      id: 1674056192236.9553,
      name: 'poster.jpg',
      type: 'image/jpeg',
      uploaded: 1674056192236,
    },
    {
      id: 1674056192235.9382,
      name: 'notebook.jpg',
      type: 'image/jpeg',
      uploaded: 1674056192235,
    },
    {
      id: 1674056192234.2673,
      name: 'macbook.jpg',
      type: 'image/jpeg',
      uploaded: 1674056192234,
    },
    {
      id: 1674056192233.0208,
      name: 'mac.jpg',
      type: 'image/jpeg',
      uploaded: 1674056192233,
    },
    {
      id: 1674056192230.3018,
      name: 'label.jpg',
      type: 'image/jpeg',
      uploaded: 1674056192230,
    },
  ],

  reducers: {
    addSiteFiles(state, action) {
      const { name, type } = action.payload;
      const uploaded = Date.now();
      const id = Date.now() + Math.random();

      state.unshift({ id, name, type, uploaded });
    },

    renameFile(state, action) {
      console.log('renameFile : action', action.payload);
      for (const file of state) {
        if (file.id === action.payload.id) {
          file.name = action.payload.values.fileName;
          break;
        }
      }
    },

    deleteFile(state, action) {
      return state.filter(page => page.id !== action.payload);
    },
  },
});

export const { addSiteFiles, renameFile, deleteFile } = filesSlice.actions;
