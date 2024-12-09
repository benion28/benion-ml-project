import axios from 'axios';
import { toast } from 'react-toastify';

const { error: toastError } = toast

const axiosInstance = axios.create({
  baseURL: 'https://benion-tech-server.onrender.com', // Replace with your API base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors for request and response
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any custom headers (e.g., authentication tokens) here
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally (e.g., logout on 401)
    if (error.response?.status === 401) {
      // Handle unauthorized access
      toastError('Unauthorized, logging out...')
      console.error('Unauthorized, logging out...')
    } else if (error.response?.status === 403) {
      // Handle forbidden access
      toastError('Forbidden, logging out...')
      console.error('Forbidden, logging out...')
    } else {
      // Handle other errors
      console.error('Error:', error.response?.data);
      toastError(error.message)
    }
    return Promise.reject(error)
  }
);

export default axiosInstance;
