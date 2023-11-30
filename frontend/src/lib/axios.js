import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  responseType: 'application/json',
})

// instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default instance
