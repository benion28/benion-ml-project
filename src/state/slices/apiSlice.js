import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {
    apiRequestStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    apiRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    apiRequestFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { apiRequestStart, apiRequestSuccess, apiRequestFail } = apiSlice.actions;
export default apiSlice.reducer;
