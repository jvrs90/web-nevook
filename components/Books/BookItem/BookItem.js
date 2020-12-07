import React from 'react'
import Heading from '../../UI/Heading/Heading'

const BookItem = ({ title, author, genre }) => {
  return (
    <>
      <article className="bg-gray-100 shadow rounded p-2">
        <Heading className="h2" as='h2'>{title}</Heading>
        <Heading className="h3" as='h3'>{author}</Heading>
        <Heading className="h3" as='h3'>{genre}</Heading>
      </article>
    </>
  )
}

export default BookItem
