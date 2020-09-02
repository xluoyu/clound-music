import axios from 'axios'
import qs from 'qs'

axios.default.timeout = 5000

const env = process.env.NODE_ENV
if (env === 'development') {
  axios.default.baseURL = '/'
} else {
  axios.default.baseURL = '/'
}

axios.interceptors.request.use(config => {
  // token && (config.headers.Authorization = token)
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error.response)
  return Promise.reject(error.response)
})

export function Get (url, params) {
  return new Promise((resolve, reject) => {
      axios.get(url, {params}).then(res => {
        resolve(res.data)
      }).catch(err => {
          reject(err)
      })
  })
}

export function Post (url, params, header) {
    params = header ? qs.stringify(params) : params
    return new Promise((resolve, reject) => {
        axios.post(url, params, {
          headers: {
            'Content-Type': headers || 'application/json'
          }
        }).then(res => {
          resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
  }