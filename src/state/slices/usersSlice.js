import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {
    usersRequestStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    usersRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    usersRequestFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { usersRequestStart, usersRequestSuccess, usersRequestFail } = usersSlice.actions;
export default usersSlice.reducer;
