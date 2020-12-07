import Heading from '../../UI/Heading/Heading'
import BookItem from '../BookItem/BookItem'

const books = [
  {
    id: 1,
    title: 'Titulo 1',
    author: 'Pepita',
    genre: 'FANTASIA'
  },
  {
    id: 2,
    title: 'Titulo 2',
    author: 'Chicuelo',
    genre: 'POLITICA'
  },
  {
    id: 3,
    title: 'Titulo 3',
    author: 'Alba',
    genre: 'ROMANTICISMO'
  },
  {
    id: 4,
    title: 'Titulo 3',
    author: 'Alba',
    genre: 'ROMANTICISMO'
  },
  {
    id: 5,
    title: 'Titulo 3',
    author: 'Alba',
    genre: 'ROMANTICISMO'
  }
]

const BookList = () => {
  return (
    <>
      <section className="BookList__home py-10">
        <Heading as="h2" className="h2 text-center text-gray-900">Últimos títulos añadidos a Nevook</Heading>

        <div className="BookList__container-books grid gap-2 grid-cols-2 md:grid-cols-5">
          {
            books.map(book => (
              <BookItem
                key={book.id}
                title={book.title}
                author={book.author}
                genre={book.genre}
              />
            ))
          }
        </div>

      </section>

    </>
  )
}

export default BookList
