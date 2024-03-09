import axios from 'axios'

export const itemsMeli = axios.create({
  baseURL: 'http://localhost:3001/api'
})
