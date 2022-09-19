import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rpc-project-production.up.railway.app/'
})