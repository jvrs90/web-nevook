
import SearchIcon from '../Icons/generic/SearchIcon'

const SearchInput = () => {
  return (
    <>
      <div className="relative shadow-lg focus-within:shadow rounded-full text-gray-600 mx-auto w-1/2">
        <input
          type="search"
          name="search"
          placeholder="Buscar por título, autor o género"
          className="bg-white w-full h-10 py-8 px-8 rounded-full text-xl focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-5 top-1/3"
        >
          <SearchIcon />
        </button>
      </div>
    </>
  )
}

export default SearchInput
