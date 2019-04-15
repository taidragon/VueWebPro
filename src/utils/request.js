import axios from 'axios'
import store from '@/store'
import iview from 'iview'
import { getToken, removeToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '/api/', // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改//'4b2e899cd1c343bdb0b3d94ed2a2588d'
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    let res = response.data
    if (res.code === '2111') {
      removeToken('token')
      location.reload()
    }
    return response
  },
  error => {
    console.log('err' + error) // for debug
    /* Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    }) */
    return Promise.reject(error)
  }
)

export default service
