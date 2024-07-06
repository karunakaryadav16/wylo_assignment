

import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice.jsx';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});





