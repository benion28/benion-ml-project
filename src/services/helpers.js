import axiosInstance from "./axiosInstance";

export const requestMethod = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH'
}

export const axiosMethods = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
};

export const methodMessages = {
  get: 'Fetched',
  post: 'Added',
  put: 'Updated',
  delete: 'Deleted',
  patch: 'Updated',
};

export const primary_color = '#1c1c3c'
export const secondary_color = '#dceff6'
export const tertiary_color = '#0ea0f5'
export const tertiary_color2 = '#0e539c'
export const warning_color = '#e78e07'
export const danger_color = '#e70505'
export const success_color = '#0ee00e'
export const success_color2 = '#035a03'

export const getThemeColor = (theme) => {
    const light = secondary_color
    const dark = primary_color
    const themeColor = {
      backgroundColor: theme === 'dark' ? dark : light,
      color: theme === 'dark' ? light : dark
    };
    return themeColor
  }
