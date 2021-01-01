import React from 'react'

import { SearchMovieContainer } from './styled'
import { BebasText } from '../../styles/Text'
import { SearchBar, SearchInput, SearchImg } from '../../styles/SearchBar'

const SearchMovie = () => {
  return (
    <SearchMovieContainer>
      <BebasText size={'30px'} margin={'20px 0 0 0'}>
        Search for Movies
      </BebasText>
      <SearchBar>
        <SearchImg />
        <SearchInput />
      </SearchBar>
    </SearchMovieContainer>
  )
}

export default SearchMovie
