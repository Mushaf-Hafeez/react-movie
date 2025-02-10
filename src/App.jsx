import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main className='background h-screen overflow-y-auto w-full text-white text-center px-5 md:px-20 py-10 flex flex-col items-center '>
      
      {/* Hero Image */}
      <img className='cursor-pointer' src="hero.png" alt="errro while rendering hero image" />

      {/* Hero Heading */}
      <h1 className='w-[80%] md:w-[50%] text-5xl font-bold text-white mb-10 text-center'>
        Find <span className='text-gradient'>Movies</span> You’ll Love Without the Hassle
      </h1>

      {/* Search Feature */}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h1>
        {
          import.meta.env.VITE_BASE_URL
        }
      </h1>

    </main>
  )
}

export default App