
import axios from 'axios'
 
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

instance.interceptors.request.use((config) => {
  // 请求前的处理
  return config
},err => Promise.reject(err))

instance.interceptors.response.use((response) => {
  const { code } = response 
  if(code !== 0) {
    //$alert(msg)
    return Promise.reject(response.data)
  }
  return response.data
},err => Promise.reject(err))

export default instance