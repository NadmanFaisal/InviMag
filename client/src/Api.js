import axios from 'axios'

axios.defaults.withCredentials = true // defauts axios into pushing cookies

export const Api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3000/v1/api',
  withCredentials: true // for the axios to push cookies, incase the defaulter didnt work
})

// acts as an intercepter to check what the backend has sent,
// if backend sent an error meaning user not authorised or a problem has occured and sends
// user back to login screen. (ex: if user cookies expire we force them back to login)
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      console.error('Unauthorized - redirecting to login')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
