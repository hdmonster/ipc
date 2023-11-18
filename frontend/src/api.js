import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:1605',
})

export default api
