import { createSlice } from '@reduxjs/toolkit'
import { initialAuthState, decryptToken, generateToken } from '../../services/helpers'

const getLoggedState = () => {
  const mlToken = localStorage.getItem('mlToken')
  if (mlToken) {
    const parsedToken = decryptToken(mlToken)
    if (parsedToken.success) {
      const authData = parsedToken.data
      console.log("Parsed State Returned")
      return { ...initialAuthState, isLoggedIn: true, user: authData }
    }
  }
  console.log("Default State Returned")
  return initialAuthState
}

const authSlice = createSlice({
  name: 'auth',
  initialState: getLoggedState(),
  reducers: {
    authRequestStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    authRequestSuccess: (state, action) => {
      const mlToken = generateToken(action.payload, '1d')
      localStorage.setItem('mlToken', mlToken)
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
