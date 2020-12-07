import React from 'react'
import Heading from '../UI/Heading/Heading'
import SearchInput from './SearchInput'

const SearchHome = () => {
  return (
    <>
      <div className="container-full bg-orange-500 py-10">
        <Heading as="h2" className="h2 text-center text-white">Busca tu siguiente libro</Heading>
        <div className="text-center text-orange-100">
          Haz una búsqueda rápida y encuentra tu siguiente lectura
        </div>
        <div className="mx-auto">
          {/* //TODO: Revisar input de búsqueda en el otro proyecto (public-nevook), creo que queda mejor */}
          <SearchInput />
        </div>
      </div>
    </>
  )
}

export default SearchHome
