const { toast } = require("react-toastify");
const { requestMethod, axiosMethods, methodMessages } = require("../../services/helpers");
const { usersRequestStart, usersRequestSuccess, usersRequestFail } = require("../slices/usersSlice");

const {  get, post, put, delete: del, patch } = requestMethod
const { success } = toast

module.exports = async ({ baseURL = process.env.BENION_TECH_API_URL, url, method, data = null, dispatch, successMessage = ''}) => {
    const fullUrl = `${baseURL}/${url}`; // Combine baseURL and endpoint
    method = method ? method : get;
    const validMethods = [get, post, put, del, patch];
    if (!validMethods.includes(method)) {
      throw new Error(`Invalid HTTP method: ${method}`);
    }

    dispatch(usersRequestStart());

    axiosMethods[method](fullUrl, data).then(response => {
      const responseData = response.data.data.allUsers
      success(`${successMessage} ${methodMessages[method]} Successfully`);
      dispatch(usersRequestSuccess(responseData))
      return responseData
    }).catch(error => {
      dispatch(usersRequestFail(error.message))
      throw error
    })
  };