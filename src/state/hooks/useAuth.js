import { useDispatch } from 'react-redux';
import { requestMethod } from '../../services/helpers';
import usersRequest from '../requests/usersRequest';
import { toast } from 'react-toastify';

const useAuth = () => {
  const dispatch = useDispatch();
  const authUrl = 'benion-users/api/auth';
  const { success, error } = toast

  const authActions = {
    login: async (credentials) => {
      try {
        const response = await usersRequest({
          url: `${authUrl}/login`,
          method: requestMethod.post,
          data: credentials,
          dispatch,
          successMessage: 'Login Successful',
        });
        // Save token or session data to local storage
        localStorage.setItem('token', response.token);
        success('You are now logged in');
        return response;
      } catch (err) {
        error('Login failed. Please check your credentials');
        throw err;
      }
    },
    signup: async (userData) => {
      try {
        const response = await usersRequest({
          url: `${authUrl}/signup`,
          method: requestMethod.post,
          data: userData,
          dispatch,
          successMessage: 'Signup Successful',
        });
        success('Account created successfully');
        return response;
      } catch (err) {
        error('Signup failed. Please try again');
        throw err;
      }
    },
    logout: () => {
      // Clear session data and Redux state
      localStorage.removeItem('token');
      success('You have been logged out');
    },
  };

  return authActions;
};

export default useAuth;
