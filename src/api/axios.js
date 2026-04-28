import axios from 'axios'

// Create an Axios instance with the Laravel backend URL
const api = axios.create({
  baseURL: 'https://zenvex-service-management-backend.test/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

export default api