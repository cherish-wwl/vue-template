
import axios from 'axios'
 
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

instance.interceptors.request.use((config) => {
  // 请求前的处理
  return config
},err => Promise.reject(err))

instance.interceptors.response.use((response) => {
<<<<<<< HEAD:src/utils/http.ts
  // const { code } = response
  // if(code !== 0) {
  //   //$alert(msg)
  //   return Promise.reject(response.data)
  // }
=======
  const { code } = response.data
  console.log(response)
  if(code !== 1) {
    return Promise.reject(response.data)
  }
>>>>>>> feature-zhanhui-dai:src/utils/http.js
  return response.data
},err => Promise.reject(err))

export default instance