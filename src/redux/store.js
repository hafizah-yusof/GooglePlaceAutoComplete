import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchReducer';

// Create and configure the store using Redux Toolkit
const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
