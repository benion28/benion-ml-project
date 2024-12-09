import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isModalOpen: false,
    theme: 'light', // Default theme is 'light'
  },
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setTheme: (state, action) => {
      state.theme = action.payload; // Set theme to either 'light' or 'dark'
    },
  },
});

export const { toggleModal, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
