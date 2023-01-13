import { createSlice } from '@reduxjs/toolkit';

export const addPageSlice = createSlice({
  name: 'addPage',

  initialState: [
    {
      id: 1673523146113,
      pageName: 'View_Page',
      created: 1673223146114,
      published: true,
      authorName: 'Wednesday Adams',
      isAdmin: false,
    },
    {
      id: 1673523146114,
      pageName: 'Create_Page',
      created: 1673100146114,
      published: false,
      authorName: 'Johnny Depp',
      isAdmin: true,
    },

    {
      id: 1673523146115,
      pageName: 'Blog_Articles',
      created: 1672523146115,
      published: true,
      authorName: 'Wednesday Adams',
      isAdmin: false,
    },
    {
      id: 1673523146116,
      pageName: 'Subscriptions',
      created: 1665523146116,
      published: true,
      authorName: 'Johnny Depp',
      isAdmin: true,
    },
    {
      id: 1673523146117,
      pageName: 'Archived_Pages',
      created: 1653523146117,
      published: false,
      authorName: 'Johnny Depp',
      isAdmin: true,
    },
  ],

  reducers: {
    addSitePage(state, action) {
      const id = Date.now();

      const { pageName, created, published, authorName, isAdmin } = action.payload;

      return [...state, { id, pageName, created, published, authorName, isAdmin }];
    },

    changePageStatus(state, action) {
      for (const page of state) {
        if (page.id === action.payload) {
          page.published = !page.published;
          break;
        }
      }
    },
  },
});

export const { addSitePage, changePageStatus } = addPageSlice.actions;
