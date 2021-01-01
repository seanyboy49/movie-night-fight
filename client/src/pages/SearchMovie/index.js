import React, { useState, useCallback } from 'react'

import { SearchMovieContainer } from './styled'
import { BebasText } from '../../styles/Text'
import { SearchBar, SearchInput, SearchImg } from '../../styles/SearchBar'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import debounce from 'lodash.debounce'

const SearchMovie = () => {
  const { apiUrl } = useConfiguration()
  const [movieResults, setMovieResult] = useState([])

  const debouncedSave = debounce(
    (currentValue) => searchMovies(currentValue),
    1000
  )

  async function searchMovies(currentValue) {
    if (!currentValue) {
      return
    }
    try {
      const response = await authFetch(
        `${apiUrl}/movies?search=${currentValue}`
      )
      const data = await response.json()
      setMovieResult(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleChange = (e) => {
    const { value: currentValue } = e.target
    debouncedSave(currentValue)
  }

  return (
    <SearchMovieContainer>
      <BebasText size={'30px'} margin={'20px 0 0 0'}>
        Search for Movies
      </BebasText>
      <SearchBar>
        <SearchImg />
        <SearchInput type="text" onChange={(e) => handleChange(e)} />
      </SearchBar>
    </SearchMovieContainer>
  )
}

export default SearchMovie
