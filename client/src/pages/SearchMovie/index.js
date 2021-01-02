import React, { useState } from 'react'
import debounce from 'lodash.debounce'

import { SearchMovieContainer, ClearImg, Button } from './styled'
import { BebasText } from '../../styles/Text'
import { SearchBar, SearchInput, SearchImg } from '../../styles/SearchBar'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import Results from './Results'

const SearchMovie = () => {
  const { apiUrl } = useConfiguration()
  const [inputValue, setInputValue] = useState('')
  const [movieResults, setMovieResult] = useState([])
  const [loadSearchMovies, setLoadSearchMovie] = useState(false)

  const debouncedSearch = debounce(
    (currentValue) => searchMovies(currentValue),
    1000
  )

  async function searchMovies(currentValue) {
    setLoadSearchMovie(true)
    if (!currentValue) {
      setMovieResult([])
      setLoadSearchMovie(false)
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
      setLoadSearchMovie(false)
    } catch (error) {
      setLoadSearchMovie(false)
      console.log('error', error)
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
    debouncedSearch(inputValue)
  }

  function clearInput() {
    setInputValue('')
    setMovieResult([])
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
      <Results movies={movieResults} loadSearchMovies={loadSearchMovies} />
    </SearchMovieContainer>
  )
}

export default SearchMovie
