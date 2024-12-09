const { toast } = require("react-toastify");
const { requestMethod } = require("../../services/helpers");
const { usersRequestStart, usersRequestSuccess, usersRequestFail } = require("../slices/usersSlice");
const { default: axiosInstance } = require("../../services/axiosInstance");

const {  get, post, put, delete: del, patch } = requestMethod
const { success } = toast

module.exports = async ({ baseURL = process.env.BENION_TECH_API_URL, url, method, data = null, dispatch, successMessage = ''}) => {
    const fullUrl = `${baseURL}/${url}`; // Combine baseURL and endpoint
    method = method ? method : 'GET';
    const validMethods = [get, post, put, del, patch];
    if (!validMethods.includes(method)) {
      throw new Error(`Invalid HTTP method: ${method}`);
    }

    dispatch(usersRequestStart());

    if (method === get) {
      axiosInstance.get(fullUrl).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Fetched Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return []
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    } else if (method === post) {
      axiosInstance.post(fullUrl, data).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Added Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return responseData
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    } else if (method === put) {
      axiosInstance.put(fullUrl, data).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Updated Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return responseData
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    } else if (method === del) {    
      axiosInstance.delete(fullUrl).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Deleted Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return responseData
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    } else if (method === patch) {
      axiosInstance.patch(fullUrl, data).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Updated Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return responseData
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    }
  };