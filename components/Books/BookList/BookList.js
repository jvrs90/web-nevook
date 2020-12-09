import { useState, useEffect } from 'react'
import Heading from '../../UI/Heading/Heading'
import BookItem from '../BookItem/BookItem'
import { getBooks } from '../../../api/books'
import { useQuery, usePaginatedQuery } from 'react-query'
import Axios from 'axios'

const booksFromApi = async () => {
  // const response = await Axios.get('http://localhost:3001/book?page=1?limit=20')
  const response = await Axios.get('https://api.nevook.com/books?p=1&l=10')
  return response
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3000/api/books')
//   const data = await response.json()
//   return {
//     props: {
//       books: data,
//     }
//   }
// }

const BookList = () => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const {
    resolvedData,
    latestData,
    isLoading,
    isError
  } = usePaginatedQuery('books', booksFromApi, {
    refetchOnWindowFocus: false,
  })

  if (isLoading) return ('Cargando.....')
  if (isError) return 'Ha habido un error en la carga del lo libros...'



  return (
    <>
      <section className="py-24 bg-gray-100">
        <Heading as="h2" className="h2 text-center text-gray-900 mb-5"> 📚 Últimos títulos añadidos a Nevook</Heading>
        <div className="text-center text-gray-500 mb-10">
          Los últimos libros que hemos añadido a nuestra base de datos
        </div>
        <div className="flex flex-wrap container-full justify-center">
          <div className="grid gap-1 grid-cols-2 md:grid-cols-5">
            {resolvedData &&
              resolvedData?.data.docs.map(book => (
                <BookItem
                  key={book._id}
                  slug={book.slug}
                  title={book.title}
                  coverUrl={book.coverUrl}
                  description={book.description}
                  author={book.author}
                  genre={book.genre}
                />
              ))
            }
          </div>
        </div>


      </section>

    </>
  )
}

export default BookList
