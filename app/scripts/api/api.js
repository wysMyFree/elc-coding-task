import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3035/',
})

export const searchAPI = {
  fetchData(term) {
    return instance.get(`?search=${term}`).then((response) => response.data)
  },
}
