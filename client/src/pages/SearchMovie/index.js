import React from 'react'

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
import Results from './Results'
import { useMovies } from '../../providers/Movies'
import useSearchMovies from '../../hooks/useSearchMovies'

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
