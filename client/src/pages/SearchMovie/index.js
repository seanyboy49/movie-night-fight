import React, { useState, useCallback } from 'react'
import debounce from 'lodash.debounce'

import { SearchMovieContainer } from './styled'
import { BebasText } from '../../styles/Text'
import {
  SearchBar,
  SearchInput,
  SearchImg,
  ClearImg,
  Button,
} from '../../styles/SearchBar'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import Results from './Results'
import { useMovies } from '../../providers/Movies'
import useSearchMovies from '../../hooks/useSearchMovies'

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

  const {
    clearInput,
    handleSearch,
    searchResults,
    isLoading,
    error,
    input,
  } = useSearchMovies({ apiUrl, movies })
  // const [inputValue, setInputValue] = useState('')
  // const [searchResults, setSearchResults] = useState([])
  // const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(false)

  // const searchMovies = async (currentValue, movieIds) => {
  //   setIsSearchResultsLoading(true)
  //   if (!currentValue) {
  //     setSearchResults([])
  //     setIsSearchResultsLoading(false)
  //     return
  //   }

  //   try {
  //     const response = await authFetch(
  //       `${apiUrl}/movies?search=${currentValue}`
  //     )
  //     const data = await response.json()

  //     if (data.Search) {
  //       const updatedMovieData = checkAddedMovies(movieIds, data.Search)
  //       setSearchResults(updatedMovieData)
  //     }
  //     setIsSearchResultsLoading(false)
  //   } catch (error) {
  //     setIsSearchResultsLoading(false)
  //     console.log('error', error)
  //   }
  // }

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const debouncedSearch = useCallback(
  //   debounce(
  //     (currentValue, movieIds) => searchMovies(currentValue, movieIds),
  //     1000
  //   ),
  //   []
  // )

  // const handleChange = (e) => {
  //   setIsSearchResultsLoading(true)
  //   // todo: rethink this logic
  //   const movieIds = movies.map((m) => m.omdb_id)

  //   setInputValue(e.target.value)
  //   debouncedSearch(e.target.value, movieIds)
  // }

  // function clearInput() {
  //   setInputValue('')
  //   setSearchResults([])
  // }

  return (
    <SearchMovieContainer>
      <BebasText size={'30px'} margin={'20px 0 0 0'}>
        Search for Movies
      </BebasText>
      <SearchBar>
        <SearchImg />
        <SearchInput type="text" value={input} onChange={handleSearch} />
        <Button onClick={clearInput}>
          <ClearImg />
        </Button>
      </SearchBar>
      <Results movies={searchResults} isSearchResultsLoading={isLoading} />
    </SearchMovieContainer>
  )
}

export default SearchMovie
