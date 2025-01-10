const { requestMethod, authTypes } = require("../../services/helpers")
const { authRequestStart, authRequestSuccess, authRequestFail } = require("../slices/authSlice")
const { default: axiosInstance } = require("../../services/axiosInstance")

const {  get, post, put, delete: del, patch } = requestMethod

module.exports = async ({ baseURL = process.env.BENION_TECH_API_URL, url, method, dispatch, type, data = null}) => {
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
      default:
        break
    }
  }