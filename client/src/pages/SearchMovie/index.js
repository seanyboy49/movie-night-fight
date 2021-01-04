import React, { useState, useCallback, useMemo } from 'react'
import debounce from 'lodash.debounce'

import { SearchMovieContainer, ClearImg, Button } from './styled'
import { BebasText } from '../../styles/Text'
import { SearchBar, SearchInput, SearchImg } from '../../styles/SearchBar'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import Results from './Results'
import { useMovies } from '../../providers/Movies'

const SearchMovie = () => {
  const { apiUrl } = useConfiguration()
  const { movies } = useMovies()
  const [inputValue, setInputValue] = useState('')
  const [movieResults, setMovieResult] = useState([])
  const [loadSearchMovies, setLoadSearchMovie] = useState(false)

  const searchMovies = async (currentValue, movieIds) => {
    console.log('callback')

    setLoadSearchMovie(true)
    if (!currentValue) {
      setMovieResult([])
      setLoadSearchMovie(false)
      return
    }

    try {
      console.log(currentValue)
      const response = await authFetch(
        `${apiUrl}/movies?search=${currentValue}`
      )
      const data = await response.json()

      console.log('hello')
      if (data.Search) {
        for (const movieData of data.Search) {
          if (movieIds.includes(movieData.imdbID)) {
            movieData['isAdded'] = true
          }
        }
        setMovieResult(data.Search)
      }
      setLoadSearchMovie(false)
    } catch (error) {
      setLoadSearchMovie(false)
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
