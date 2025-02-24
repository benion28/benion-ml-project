import axios from 'axios';
import { toast } from 'react-toastify';
import { decryptToken } from './helpers';

const { error: toastError, success: toastSuccess } = toast

const axiosInstance = axios.create({
  baseURL: process.env.BENION_TECH_API_URL, // Replace with your API base URL
  timeout: 120000, // Timeout after 120 seconds
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
})

// Add interceptors for request and response
axiosInstance.interceptors.request.use(
  (config) => {
    // Add API key for specific requests
    const apiKey = process.env.BENION_TECH_AUTH_API_KEY // Your API key
    if (config.url?.includes('/auth/login') || config.url?.includes('/auth/register')) {
      config.headers['x-api-key'] = apiKey; // Add API key to headers
    }

    // Add any custom headers (e.g., authentication tokens) here
    let token = null
    const mlToken = localStorage.getItem('mlToken')
    if (mlToken) {
      const parsedToken = decryptToken(mlToken)
      if (parsedToken.success) {
        const authData = parsedToken.data
        token = authData.token
      }
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => {
    const { success, message } = response.data
    if (success && message) {
      toastSuccess(message)
    }
    return response
  },
  (error) => {
    const errorMessage = error.response.data.message ? error.response.data.message : error.message
    // Handle errors globally (e.g., logout on 401)
    if (error.response?.status === 401) {
      // Handle unauthorized access
      toastError(`Unauthorized: ${errorMessage}`)
      console.error(`Unauthorized: ${errorMessage}`)
    } else if (error.response?.status === 403) {
      // Handle forbidden access
      toastError(`Forbidden: ${errorMessage}`)
      console.error(`Forbidden: ${errorMessage}`)
    } else {
      // Handle other errors
      console.error('Server Error:', error.response?.data)
      toastError(`Server Error: ${errorMessage}`)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
