import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    user: null,
    error: null,
  },
  reducers: {
    authRequestStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    authRequestFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { authRequestStart, authRequestSuccess, authRequestFail } = authSlice.actions;
export default authSlice.reducer;
