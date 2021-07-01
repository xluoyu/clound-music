import axios from 'axios'
import qs from 'qs'

const env = process.env.NODE_ENV

const axiosInstance = axios.create({
  baseURL: env === 'development' ? 'http://192.168.0.184:3300' : '/'
})

axiosInstance.interceptors.request.use(config => {
  config.withCredentials = true
  return config
}, error => {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error.response)
  return Promise.reject(error.response)
})

export function Get (url, params) {
  return new Promise((resolve, reject) => {
      axiosInstance.get(url, {params}).then(res => {
        resolve(res.data)
      }).catch(err => {
          reject(err)
      })
  })
}

export function Post (url, params, header) {
    params = header ? qs.stringify(params) : params
    return new Promise((resolve, reject) => {
        axiosInstance.post(url, params, {
          headers: {
            'Content-Type': header || 'application/json'
          }
        }).then(res => {
          resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
  }