import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
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
      id: 1673523146114,
      pageName: 'Create_Page',
      created: 1673100146114,
      published: false,
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
    {
      id: 1674649411171,
      pageName: 'portfolio',
      created: 1657882445639,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
    {
      id: 1674649421241,
      pageName: 'index',
      created: 1671016771780,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
    {
      id: 1674649475328,
      pageName: 'spinner',
      created: 1669542170318,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
    {
      id: 1674649499128,
      pageName: 'mainMyLibrary',
      created: 1669542170318,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
    {
      id: 1674649568360,
      pageName: 'headerMyLib',
      created: 1669542170314,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
    {
      id: 1674649579248,
      pageName: 'header',
      created: 1669542170314,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
    {
      id: 1674649596049,
      pageName: 'login',
      created: 1669542170314,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
    {
      id: 1674649603861,
      pageName: 'main',
      created: 1669542170318,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
    {
      id: 1674649610356,
      pageName: 'modal',
      created: 1669542170318,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
    {
      id: 1674649619029,
      pageName: 'scroll-top-btn',
      created: 1669542170318,
      published: false,
      authorName: 'Joe Bloggs',
      isAdmin: true,
    },
  ],

  reducers: {
    addSitePage(state, action) {
      const id = Date.now();

      const {
        pageName,
        lastModified: created,
        published = false,
        name: authorName,
        isAdmin,
      } = action.payload;

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

    onDeletePage(state, action) {
      return state.filter(page => page.id !== action.payload);
    },

    onSortPages(state, { payload }) {
      return state.sort((prevPage, nextPage) => {
        if (payload === 'created' || payload === 'published') {
          return prevPage[payload] > nextPage[payload] ? -1 : 1;
        }
        return prevPage[payload] > nextPage[payload] ? 1 : -1;
      });
    },

    onRenamePage(state, action) {
      for (const page of state) {
        if (page.id === action.payload.id) {
          page.pageName = action.payload.pageName;
          break;
        }
      }
    },
  },
});

export const { addSitePage, changePageStatus, onDeletePage, onSortPages, onRenamePage } =
  pageSlice.actions;
