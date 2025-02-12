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

export const requestTypes = {
  getAll: 'get-all',
  getOne: 'get-one',
  edit  : 'update',
  delete: 'delete',
  add: 'create',
  select: 'select'
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

export const aiOptions = [
  { value: 'chat-bot', label: 'Chat Bot' },
  { value: 'image-recognition', label: 'Image Recognition' },
  { value: 'video-recognition', label: 'Video Recognition' },
  { value: 'web-scraping', label: 'Web Scraping' },
]

export const wsOptions = [
  { value: 'images', label: 'Images' },
  { value: 'documents', label: 'Documents' },
  { value: 'text', label: 'Text' },
]

export const conversations = [
  { title: 'ML Project Stack Setup', timestamp: '2025-01-14', id: 0 },
  { title: 'Python Developer Project Advice', timestamp: '2025-01-10', id: 2 },
  { title: 'React Component Optimization', timestamp: '2025-01-08', id: 3 },
  { title: 'Ant Design Form Best Practices', timestamp: '2025-01-07', id: 4 },
  { title: 'Bootstrap Grid Layout Tips', timestamp: '2025-01-06', id: 5 },
  { title: 'SCSS Customization Ideas', timestamp: '2025-01-05', id: 6 },
  { title: 'AI Chatbox API Integration', timestamp: '2025-01-04', id: 7 },
  { title: 'NextJS Dynamic Routing', timestamp: '2025-01-03', id: 8 },
  { title: 'Redux State Management Guide', timestamp: '2025-01-02', id: 9 },
  { title: 'Paystack API Implementation', timestamp: '2025-01-01', id: 10 },
]

export const suggestions = [
  { text: 'What are the best practices for React state management?', id: 1 },
  { text: 'Can you explain Redux middleware and its use cases?', id: 2 },
  { text: 'How do I integrate a payment gateway in my web app?', id: 3 },
  { text: 'What are some key differences between SCSS and CSS?', id: 4 },
  { text: 'How can I optimize API calls in a React project?', id: 5 },
  { text: 'What are the steps for setting up authentication in Next.js?', id: 6 },
  { text: 'Can you recommend libraries for data visualization in JavaScript?', id: 7 },
  { text: 'How do I handle form validation with Ant Design?', id: 8 },
  { text: 'What is the best way to structure a Redux store?', id: 9 },
  { text: 'How can I implement dynamic theming in a web app?', id: 10 },
]

export const messages = [
  { sender: 'user', text: 'Hi there!', timestamp: '10:00 AM' },
  { sender: 'ai', text: 'Hello! How can I assist you today?', timestamp: '10:01 AM' },
  { sender: 'user', text: 'Can you help me with a coding issue?', timestamp: '10:02 AM' },
  { sender: 'ai', text: 'Sure! Could you provide more details about the issue?', timestamp: '10:03 AM' },
  { sender: 'user', text: 'I’m stuck on setting up Redux in my React app.', timestamp: '10:04 AM' },
  { sender: 'ai', text: 'No problem! Do you need help with configuration or basic usage?', timestamp: '10:05 AM' },
  { sender: 'user', text: 'Both, actually. I’m new to Redux.', timestamp: '10:06 AM' },
  { sender: 'ai', text: 'Understood. Let’s start with the configuration. First, you need to install Redux and React-Redux.', timestamp: '10:07 AM' },
  { sender: 'user', text: 'Okay, I’ve done that. What’s next?', timestamp: '10:08 AM' },
  { sender: 'ai', text: 'Next, you need to create a Redux store and wrap your app with the provider from React-Redux.', timestamp: '10:09 AM' },
  { sender: 'user', text: 'Got it. Can you explain reducers a bit more?', timestamp: '10:10 AM' },
  { sender: 'ai', text: 'Reducers are pure functions that determine changes to your app state. They take the current state and an action as inputs.', timestamp: '10:11 AM' },
]

export const chatGreeting = [
  {
    role: 'model',
    message: 'Hi there! This is an AI Chatbot. Its nice to meet you. How can I help you today?'
  }
]