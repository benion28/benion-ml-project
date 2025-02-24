const { requestMethod, authTypes, initialAuthState } = require("../../services/helpers")
const { authRequestStart, authRequestSuccess, authRequestFail, authLogoutRequestSuccess, authRegisterRequestSuccess } = require("../slices/authSlice")
const { default: axiosInstance } = require("../../services/axiosInstance")

const {  get, post, put, delete: del, patch } = requestMethod

module.exports = async ({ baseURL = process.env.NODE_ENV === 'development' ? process.env.BENION_TECH_API_URL_TEST : process.env.BENION_TECH_API_URL_PROD, url, method, dispatch, type, data = null}) => {
    const fullUrl = `${baseURL}/${url}` // Combine baseURL and endpoint
    method = method ? method : get
    const validMethods = [get, post, put, del, patch];
    if (!validMethods.includes(method)) {
      throw new Error(`Invalid HTTP method: ${method}`)
    }

    dispatch(authRequestStart())

    switch (type) {
      case authTypes.login:
        axiosInstance.post(fullUrl, data).then(response => {
          const responseData = response.data
          if (responseData.success) {
            dispatch(authRequestSuccess(responseData.data))
          }
          return []
        }).catch(error => {
          dispatch(authRequestFail(error.message))
        })
        break
      case authTypes.register:
        axiosInstance.post(fullUrl, data).then(response => {
          const responseData = response.data
          if (responseData.success) {
            dispatch(authRegisterRequestSuccess(initialAuthState.isLoading))
          }
          return []
        }).catch(error => {
          dispatch(authRequestFail(error.message))
        })
        break
      case authTypes.logout:
        axiosInstance.post(fullUrl, data).then(response => {
          const responseData = response.data
          if (responseData.success) {
            dispatch(authLogoutRequestSuccess(initialAuthState))
          }
          return [responseData.data]
        }).catch(error => {
          dispatch(authRequestFail(error.message))
        })
        break
      default:
        break
    }
  }