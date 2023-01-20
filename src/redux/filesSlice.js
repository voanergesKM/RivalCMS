import { createSlice } from '@reduxjs/toolkit';

export const filesSlice = createSlice({
  name: 'siteFiles',

  initialState: [
    {
      id: 1674230658754.4648,
      name: 'request.ods',
      type: 'application/vnd.oasis.opendocument.spreadsheet',
      uploaded: 1674230658754,
    },
    {
      id: 1674230658753.278,
      name: 'IMG_6674.JPG',
      type: 'image/jpeg',
      uploaded: 1674230658753,
    },
    {
      id: 1674230658753.7373,
      name: 'IMG_6679.JPEG',
      type: 'image/jpeg',
      uploaded: 1674230658753,
    },
    {
      id: 1674230658752.6191,
      name: 'Oleksandr-Kurzhy_Junior_Front-end.pdf',
      type: 'application/pdf',
      uploaded: 1674230658752,
    },
    {
      id: 1674230658752.947,
      name: 'Без назви 1.odt',
      type: 'application/vnd.oasis.opendocument.text',
      uploaded: 1674230658752,
    },
    {
      id: 1674230658751.233,
      name: 'сан просв менархе.odt',
      type: 'application/vnd.oasis.opendocument.text',
      uploaded: 1674230658751,
    },
    {
      id: 1674230658750.4053,
      name: 'Мої відгуки на вакансії.xlsx',
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      uploaded: 1674230658750,
    },
    {
      id: 1674230658749.1584,
      name: 'сан просв менархе.docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      uploaded: 1674230658749,
    },
    {
      id: 1674230658746.691,
      name: 'гестози.odt',
      type: 'application/vnd.oasis.opendocument.text',
      uploaded: 1674230658746,
    },
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
