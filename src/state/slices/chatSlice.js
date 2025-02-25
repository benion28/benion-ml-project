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
      state.chat = action.payload.data;

      switch (action.payload.type) {
        case 'add':
          state.chats = [...state.chats, action.payload.data];
          break;
        case 'update':
          state.chats = state.chats.map(chat => chat.id === action.payload.data.id ? action.payload.data : chat);
          break;
        case 'delete':
          state.chats = state.chats.filter(chat => chat.$key !== action.payload.data);
          break;
        default:
          break;
      }
    },
    chatRequestFail: (state, action) => {
      state.isLoading = false;
      state.isTyping = false;
      state.isError = true;
      state.error = action.payload;
    },
    chatTypingRequest: (state) => {
      state.isTyping = true;
      state.isLoading = false;
      state.isError = false;
      state.error = null;
    },
    chatLoadingRequest: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { chatRequestStart, chatsRequestSuccess, chatRequestSuccess, chatRequestFail, chatTypingRequest, chatLoadingRequest } = chatSlice.actions;
export default chatSlice.reducer;
