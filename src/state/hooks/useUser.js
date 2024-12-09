import { useDispatch } from 'react-redux';
import axiosInstance from '../../services/axiosInstance';
import { usersRequestStart, usersRequestSuccess, usersRequestFail } from '../slices/usersSlice';
import { requestMethod } from '../../services/helpers';
import { toast } from 'react-toastify';

const useUser = () => {
  const dispatch = useDispatch();
  const {  get, post, put, delete: del, patch } = requestMethod
  const { success } = toast

  const makeRequest = async ({ url, method, data = null, successMessage = ''}) => {
    method = method ? method : 'GET';
    const validMethods = [get, post, put, del, patch];
    if (!validMethods.includes(method)) {
      throw new Error(`Invalid HTTP method: ${method}`);
    }

    dispatch(usersRequestStart());

    if (method === get) {
      axiosInstance.get(url).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Fetched Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return responseData
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    } else if (method === post) {
      axiosInstance.post(url, data).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Added Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return responseData
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    } else if (method === put) {
      axiosInstance.put(url, data).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Updated Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return responseData
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    } else if (method === del) {    
      axiosInstance.delete(url).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Deleted Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return responseData
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    } else if (method === patch) {
      axiosInstance.patch(url, data).then(response => {
        const responseData = response.data.data.allUsers
        success(`${successMessage} Updated Successfully`)
        dispatch(usersRequestSuccess(responseData))
        return responseData
      }).catch(error => {
        dispatch(usersRequestFail(error.message))
        throw error
      })
    }

    // axiosInstance.get(url).then(response => {
    //   console.log(response.data.data)
    // }).catch(error => {
    //   console.log(error.message)
    // })

    // axiosInstance({
    //   url, method, data
    // }).then(response => {
    //   dispatch(usersRequestSuccess(response.data.data.allUsers));
    //   return response.data;
    // }).catch(error => {
    //   dispatch(usersRequestFail(error.message));
    // })

    // // try {
    // //   const response = await axiosInstance({ url, method, data });
    // //   dispatch(usersRequestSuccess(response.data));
    // //   return response.data;
    // // } catch (error) {
    // //   dispatch(usersRequestFail(error.message));
    // //   throw error;
    // // }
  };

  return makeRequest;
};

export default useUser;
