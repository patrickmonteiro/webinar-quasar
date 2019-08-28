import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: process.env.API,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { HTTPClient }

// export default async ({ Vue }) => {
//   Vue.prototype.$axios = axios
// }
