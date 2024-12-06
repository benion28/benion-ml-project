import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isModalOpen: false,
    theme: 'light', // 'dark' can be an alternative
  },
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setTheme: (state, action) => {
      state.theme = action.payload; // e.g., 'light' or 'dark'
    },
  },
});

export const { toggleModal, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
