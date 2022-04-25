
import axios from 'axios'
 
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

instance.interceptors.request.use((config) => {
  // 请求前的处理
  return config
},err => Promise.reject(err))

instance.interceptors.response.use((response) => {
<<<<<<< HEAD
  console.log('response',response)
  const { code } = response.data
  if(![0,'200',200,'0'].includes(code)) {
    //$alert(msg)
=======
  const { code } = response.data
  console.log(response)
  if(code !== 1) {
>>>>>>> feature-zhanhui-dai
    return Promise.reject(response.data)
  }
  return response.data
},err => Promise.reject(err))

export default instance