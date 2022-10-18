import axios from 'axios'

export const api = axios.create({
  headers: {
    Authorization: process.env.GITHUB_ACCESS_TOKEN,
  },
})
