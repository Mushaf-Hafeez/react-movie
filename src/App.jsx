import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner'
import { useDebounce } from 'react-use'
import MovieCard from './components/MovieCard'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [deboundedTerm, setDebouncedTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState('Error while fetching movies, please try later.')

  useDebounce(() => setDebouncedTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query = '') => {

    setIsLoading(true)

    try {

      const response = await fetch(query ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}` : 'https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        }
      })

      const data = await response.json()
      if (data) {
        setMovies(data.results)
      }

    } catch (error) {
      console.log("error while fetching movies: ", error.message)
      setErrorMessage('Error while fetching movies, please try later.')

    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    fetchMovies(deboundedTerm)
  }, [deboundedTerm])

  return (
    <main className='background bg-slate-950 h-screen overflow-y-auto w-full text-white px-5 md:px-20 py-10 flex flex-col items-center '>

      {/* Hero Image */}
      <img className='cursor-pointer' src="hero.png" alt="error while rendering hero image" />

      {/* Hero Heading */}
      <h1 className='w-[80%] md:w-[50%] text-5xl font-bold text-white mb-10 text-center'>
        Find <span className='text-gradient'>Movies</span> You’ll Love Without the Hassle <br /> <span className='text-gradient'>Phamba</span>
      </h1>

      {/* Search Feature */}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Populat Heading */}
      <div className='text-left w-full mt-2'>
        <h1 className='text-3xl font-semibold text-white text-left'>
          Popular
        </h1>
      </div>

      {/* Populat Movies */}
      <div className='my-5 w-full'>
        {
          isLoading ? (
            <Spinner />
          ) : (
            movies.length == 0 ? (
              <p className='text-red-500'>{errorMessage}</p>
            ) : (
              <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                  movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))
                }
              </div>
            )
          )
        }
      </div>

    </main>
  )
}

export default App