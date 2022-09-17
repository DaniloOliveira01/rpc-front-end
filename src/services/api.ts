import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://epg-api.video.globo.com/programmes/'
})