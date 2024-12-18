import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import uiReducer from './slices/uiSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    ui: uiReducer,
    auth: authReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
