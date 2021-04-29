
import axios from 'axios'
 
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

instance.interceptors.request.use((config) => {
  // 请求前的处理
  return config
},err => Promise.reject(err))

instance.interceptors.response.use((response) => {
  const { code } = response.data
  console.log(response)
  if(code !== 1) {
    return Promise.reject(response.data)
  }
  return response.data
},err => Promise.reject(err))

export default instance