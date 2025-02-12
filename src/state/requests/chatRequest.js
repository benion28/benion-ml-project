const { requestMethod, requestTypes } = require("../../services/helpers")
const { chatRequestStart, chatRequestSuccess, chatRequestFail, chatsRequestSuccess, chatTypingRequest } = require("../slices/chatSlice")
const { default: axiosInstance } = require("../../services/axiosInstance")

const {  get, post, put, delete: del, patch } = requestMethod

module.exports = async ({ baseURL = process.env.NODE_ENV === 'development' ? process.env.BENION_TECH_API_URL_TEST : process.env.BENION_TECH_API_URL_PROD, url, method, dispatch, type, data = null}) => {
    const fullUrl = `${baseURL}/${url}` // Combine baseURL and endpoint
    method = method ? method : get
    const validMethods = [get, post, put, del, patch];
    if (!validMethods.includes(method)) {
      throw new Error(`Invalid HTTP method: ${method}`)
    }

    dispatch(chatRequestStart())

    switch (type) {
      case requestTypes.add:
        dispatch(chatTypingRequest())
        axiosInstance.post(fullUrl, data).then(response => {
          const responseData = response.data
          if (responseData.success) {
            dispatch(chatRequestSuccess(responseData.data))
          }
          return []
        }).catch(error => {
          dispatch(chatRequestFail(error.message))
        })
        break
      case requestTypes.getAll:
        axiosInstance.get(fullUrl).then(response => {
          const responseData = response.data
          if (responseData.success) {
            dispatch(chatsRequestSuccess(responseData.data))
          }
          return []
        }).catch(error => {
          dispatch(chatRequestFail(error.message))
        })
        break
      case requestTypes.getOne:
        axiosInstance.get(fullUrl).then(response => {
          const responseData = response.data
          if (responseData.success) {
            dispatch(chatRequestSuccess(responseData.data))
          }
          return [responseData.data]
        }).catch(error => {
          dispatch(chatRequestFail(error.message))
        })
        break
      case requestTypes.select:
        dispatch(chatRequestSuccess(data))
        break
      case requestTypes.update:
        dispatch(chatTypingRequest())
        axiosInstance.put(fullUrl, data).then(response => {
          const responseData = response.data
          if (responseData.success) {
            dispatch(chatRequestSuccess(responseData.data))
          }
          return []
        }).catch(error => {
          dispatch(chatRequestFail(error.message))
        })
        break
      case requestTypes.delete:
        axiosInstance.delete(fullUrl).then(response => {
          const responseData = response.data
          if (responseData.success) {
            dispatch(chatRequestSuccess(responseData.data))
          }
          return []
        }).catch(error => {
          dispatch(chatRequestFail(error.message))
        })
        break
      default:
        break
    }
  }