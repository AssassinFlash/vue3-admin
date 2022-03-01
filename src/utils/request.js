import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  config.headers.icode = 'C15FB7175BFDE08E'
  return config
})

service.interceptors.response.use(
  function (response) {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  function (error) {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
export default service
