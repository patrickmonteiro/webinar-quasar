import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: process.env.API,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache'
  }
})

export { HTTPClient }

// export default async ({ Vue }) => {
//   Vue.prototype.$axios = axios
// }
