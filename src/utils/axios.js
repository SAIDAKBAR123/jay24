import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.deliveryegy.uz/v1',
  timeout: 12000
})

const errorHandler = (error, hooks) => {
  if (error.response) {
    console.log(error.response)

    if (error.response.status === 401) {
      localStorage.removeItem('user')
      window.location.href = '/'
    }
  }
  return Promise.reject(error.response)
}

// request interceptor
// request.interceptors.request.use(config => {
//   const token = localStorage.getItem('user')
//   if (token) {
//     config.headers.Authorization = token
//   }
//   return config
// }, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

export default request
