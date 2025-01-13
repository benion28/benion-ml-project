import axiosInstance from "./axiosInstance";

export const requestMethod = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH'
}

// export const axiosMethods = (method, fullUrl, data) => {
//   switch (method) {
//     case requestMethod.get:
//       axiosInstance.get(fullUrl)
//       break;
//     case requestMethod.post:
//       axiosInstance.post(fullUrl, data)
//       break;
//     case requestMethod.put:
//       axiosInstance.put(fullUrl, data)
//       break;
//     case requestMethod.delete:
//       axiosInstance.delete(fullUrl)
//       break;
//     case requestMethod.patch:
//       axiosInstance.patch(fullUrl, data)
//       break;
//     default:
//       break;
//   }
// }

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

export const authTypes = {
  login: 'login',
  logout: 'logout',
  register: 'register'
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

export const benionUserUrl = 'benion-users/api'
export const benionMlUrl = 'benion-ml/api'

export const userGenders = [
  {name: "Male", label: "Male", value: "male"},
  {name: "Female", label: "Female", value: "female"},
  {name: "Other", label: "Other", value: "other"},
]

export const initialAuthState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
}
