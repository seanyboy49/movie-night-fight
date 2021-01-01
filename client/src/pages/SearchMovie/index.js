import React, { useState, useCallback } from 'react'

import { SearchMovieContainer } from './styled'
import { BebasText } from '../../styles/Text'
import { SearchBar, SearchInput, SearchImg } from '../../styles/SearchBar'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import debounce from 'lodash.debounce'

const SearchMovie = () => {
  const { apiUrl } = useConfiguration()

  const debouncedSave = useCallback(
    debounce(
      () =>
        async function searchMovies() {
          try {
            const response = await authFetch(`${apiUrl}/movies`)
            const data = await response.json()
            console.log(data)
          } catch (error) {
            console.log('error', error)
          }
        },
      1000
    ),
    [apiUrl]
  )

  const handleChange = (e) => {
    debouncedSave()
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
