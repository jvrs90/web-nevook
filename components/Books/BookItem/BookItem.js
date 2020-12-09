import Link from 'next/link'
import React from 'react'
import Heading from '../../UI/Heading/Heading'

import styles from './BookItem.module.css'

const BookItem = ({
  _id,
  slug,
  title,
  coverUrl,
  description,
  author,
  genre,
}) => {
  return (
    <>
      <Link href={`${slug}`}>
        <a className="relative pointer overflow-hidden h-full w-full">
          <img
            src={coverUrl} onError={(e) => { e.target.onerror = null; e.target.src = "http://api.nevook.com/image/books/xxx" }}
            alt={title}
            className='rounded w-full h-full'
          />
        </a>
      </Link>

    </>
  )
}

export default BookItem
