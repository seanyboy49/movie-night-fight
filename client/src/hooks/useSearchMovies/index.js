import { useState, useCallback } from 'react'
import debounce from 'lodash.debounce'

import { authFetch } from '../../auth'

function checkAddedMovies(movieIds, movieData) {
  const transformed = movieData.map((movie) => {
    const isAdded = movieIds.includes(movie.imdbID)

    return {
      ...movie,
      isAdded,
    }
  })
  return transformed
}

const useSearchMovies = ({ apiUrl, movies }) => {
  const [searchResults, setSearchResults] = useState()
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState()
  const [input, setInput] = useState('')

  async function searchMovies(currentValue, movieIds) {
    setIsLoading(true)
    if (!currentValue) {
      setSearchResults([])
      setIsLoading(false)
      return
    }

    try {
      const response = await authFetch(
        `${apiUrl}/movies?search=${currentValue}`
      )
      const data = await response.json()

      if (data.Search) {
        const updatedMovieData = checkAddedMovies(movieIds, data.Search)
        setSearchResults(updatedMovieData)
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(
      (currentValue, movieIds) => searchMovies(currentValue, movieIds),
      1000
    ),
    []
  )

  function clearInput() {
    setInput('')
    setSearchResults([])
  }

  function handleSearch(e) {
    setIsLoading(true)
    // todo: rethink this logic
    const movieIds = movies.map((m) => m.omdb_id)

    setInput(e.target.value)
    debouncedSearch(e.target.value, movieIds)
  }

  return { clearInput, handleSearch, searchResults, isLoading, error, input }
}

export default useSearchMovies
