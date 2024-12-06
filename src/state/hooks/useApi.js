import { useDispatch } from 'react-redux';
import axiosInstance from '../../services/axiosInstance';
import { apiRequestStart, apiRequestSuccess, apiRequestFail } from '../slices/apiSlice';

const useApi = () => {
  const dispatch = useDispatch();

  const makeRequest = async ({ url, method, data = null }) => {
    method = method ? method : 'GET';
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
    if (!validMethods.includes(method)) {
      throw new Error(`Invalid HTTP method: ${method}`);
    }

    dispatch(apiRequestStart());
    try {
      const response = await axiosInstance({ url, method, data });
      dispatch(apiRequestSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(apiRequestFail(error.message));
      throw error;
    }
  };

  return makeRequest;
};

export default useApi;
