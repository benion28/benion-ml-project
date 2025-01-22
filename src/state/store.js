import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import uiReducer from './slices/uiSlice';
import authReducer from './slices/authSlice';
import chatReducer from './slices/chatSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    ui: uiReducer,
    auth: authReducer,
    chat: chatReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
