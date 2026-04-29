import axios from 'axios'

// Create an Axios instance with the Laravel backend URL
const api = axios.create({
  baseURL: "https://service.thewarriors.team/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api