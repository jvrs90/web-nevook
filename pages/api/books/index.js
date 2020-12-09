const axios = require('axios');

async function getAllBooks(req, res) {
  // const response = await axios.get('http://localhost:3001/book?page=1?limit=10')
  const response = await axios.get('https://api.nevook.com/book?page=1?limit=10')
    .then(res => {
      if (res) {
        console.log('>>> res api next', res)
        res.json(res);
      } else {
        res.json({});
      }
    })
    .catch(error => {
      console.log(error)
    })

  return response

}

export default getAllBooks;