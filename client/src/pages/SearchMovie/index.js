import React, { useState, useCallback } from 'react'
import debounce from 'lodash.debounce'

import { SearchMovieContainer, ClearImg, Button } from './styled'
import { BebasText } from '../../styles/Text'
import { SearchBar, SearchInput, SearchImg } from '../../styles/SearchBar'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import Results from './Results'
import { useMovies } from '../../providers/Movies'

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

const SearchMovie = () => {
  const { apiUrl } = useConfiguration()
  const { movies } = useMovies()
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(false)

  const searchMovies = async (currentValue, movieIds) => {
    setIsSearchResultsLoading(true)
    if (!currentValue) {
      setSearchResults([])
      setIsSearchResultsLoading(false)
      return
    }

    try {
      console.log(currentValue)
      const response = await authFetch(
        `${apiUrl}/movies?search=${currentValue}`
      )
      const data = await response.json()

      if (data.Search) {
        const updatedMovieData = checkAddedMovies(movieIds, data.Search)
        setSearchResults(updatedMovieData)
      }
      setIsSearchResultsLoading(false)
    } catch (error) {
      setIsSearchResultsLoading(false)
      console.log('error', error)
    }
  }

  const debouncedSearch = useCallback(
    debounce(
      (currentValue, movieIds) => searchMovies(currentValue, movieIds),
      1000
    ),
    []
  )

  const handleChange = (e) => {
    // todo: rethink this logic
    const movieIds = movies.map((m) => m.omdb_id)

    setInputValue(e.target.value)
    debouncedSearch(e.target.value, movieIds)
  }

  function clearInput(e) {
    setInputValue('')
    setSearchResults([])
  }

  return (
    <SearchMovieContainer>
      <BebasText size={'30px'} margin={'20px 0 0 0'}>
        Search for Movies
      </BebasText>
      <SearchBar>
        <SearchImg />
        <SearchInput type="text" value={inputValue} onChange={handleChange} />
        <Button onClick={clearInput}>
          <ClearImg />
        </Button>
      </SearchBar>
      <Results
        movies={searchResults}
        isSearchResultsLoading={isSearchResultsLoading}
      />
    </SearchMovieContainer>
  )
}

export default SearchMovie
