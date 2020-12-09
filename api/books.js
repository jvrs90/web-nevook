import axios from 'axios'

export const getBooks = async (url, page, limit) => {
  await axios.get(`${url}?page=${page}&limit=${limit}`)
    .then(response => {
      if (response.data.statusCode) {
        return {
          error: response.data.error,
          message: response.data.message
        }
      } else {
        console.log(response.data.results)
        return response.data
      }
    })
}
