import React, { useState } from 'react'
import debounce from 'lodash.debounce'

import { SearchMovieContainer } from './styled'
import { BebasText } from '../../styles/Text'
import { SearchBar, SearchInput, SearchImg } from '../../styles/SearchBar'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import Results from './Results'

const SearchMovie = () => {
  const { apiUrl } = useConfiguration()
  const [movieResults, setMovieResult] = useState([])

  const debouncedSearch = debounce(
    (currentValue) => searchMovies(currentValue),
    1000
  )

  async function searchMovies(currentValue) {
    if (!currentValue) {
      setMovieResult([])
      return
    }
    try {
      const response = await authFetch(
        `${apiUrl}/movies?search=${currentValue}`
      )
      const data = await response.json()
      if (data.Search) {
        setMovieResult(data.Search)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleChange = (e) => {
    debouncedSearch(e.target.value)
  }

  return (
    <SearchMovieContainer>
      <BebasText size={'30px'} margin={'20px 0 0 0'}>
        Search for Movies
      </BebasText>
      <SearchBar>
        <SearchImg />
        <SearchInput type="text" onChange={handleChange} />
      </SearchBar>
      <Results movies={movieResults} />
    </SearchMovieContainer>
  )
}

export default SearchMovie
