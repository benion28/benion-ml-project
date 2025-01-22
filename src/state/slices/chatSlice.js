import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chats',
  initialState: {
    isLoading: false,
    isTyping: false,
    isError: false,
    chats: null,
    chat: null,
    error: null
  },
  reducers: {
    chatRequestStart: (state) => {
      state.isLoading = true;
      state.isTyping = true;
      state.isError = false;
      state.error = null;
    },
    chatsRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.chats = action.payload;
    },
    chatRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.isTyping = false;
      state.isError = false;
      state.chat = action.payload;
    },
    chatRequestFail: (state, action) => {
      state.isLoading = false;
      state.isTyping = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { chatRequestStart, chatsRequestSuccess, chatRequestSuccess, chatRequestFail } = chatSlice.actions;
export default chatSlice.reducer;
