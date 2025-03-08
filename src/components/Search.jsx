import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

  return (
    <div className='w-[100%] md:w-[500px] flex items-center gap-4 p-3 rounded bg-dark-100 text-white'>
        <img className='cursor-pointer' src="search.svg" alt="error while rendering search icon" />
        <input type="text" value={searchTerm} onChange={handleChange} className='w-full bg-transparent outline-none focus:outline-none' placeholder='Search through 300+ movies online' />
    </div>
  )
}

export default Search