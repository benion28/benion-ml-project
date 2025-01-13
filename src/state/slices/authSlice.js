import { createSlice } from '@reduxjs/toolkit'
import { initialAuthState } from '../../services/helpers'

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    authRequestStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    authRequestSuccess: (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.isLoggedIn = true
    },
    authLogoutRequestSuccess: (state, action) => {
      state = action.payload
    },
    authRegisterRequestSuccess: (state, action) => {
      state.isLoading = action.payload
    },
    authRequestFail: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
});

export const { authRequestStart, authRequestSuccess, authRequestFail, authLogoutRequestSuccess,authRegisterRequestSuccess } = authSlice.actions;
export default authSlice.reducer;
