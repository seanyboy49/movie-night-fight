import { useState, useCallback, useMemo } from 'react'
import debounce from 'lodash.debounce'

import { authFetch } from '../../auth'

const useSearchMovies = ({ apiUrl, movies }) => {
  const [searchResults, setSearchResults] = useState()
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState()
  const [input, setInput] = useState('')

  const checkAddedMovies = useCallback((movieIds, movieData) => {
    if (!movieData) return undefined

    return movieData.map((movie) => {
      const isAdded = movieIds.includes(movie.imdbID)

      return {
        ...movie,
        isAdded,
      }
    })
  }, [])

  async function searchMovies(currentValue) {
    console.log('search')
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

      // data.Search could be empty if there are no search result matches
      if (data.Search) {
        setSearchResults(data.Search)
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((currentValue) => searchMovies(currentValue), 1000),
    []
  )

  function clearInput() {
    setInput('')
    setSearchResults([])
  }

  function handleSearch(e) {
    setIsLoading(true)
    const inputValue = e.target.value

    setInput(inputValue)
    debouncedSearch(inputValue)
  }

  // Only recompute movieIds if movies changes
  const movieIds = useMemo(() => movies.map((m) => m.omdb_id), [movies])
  const updatedMovieData = useMemo(
    () => checkAddedMovies(movieIds, searchResults),
    [checkAddedMovies, movieIds, searchResults]
  )

  return {
    clearInput,
    handleSearch,
    searchResults: updatedMovieData,
    isLoading,
    error,
    input,
  }
}

export default useSearchMovies
