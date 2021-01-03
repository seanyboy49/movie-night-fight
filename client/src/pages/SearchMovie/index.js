import React, { useState, useCallback } from 'react'
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

  const debouncedSearch = useCallback(
    debounce((currentValue) => searchMovies(currentValue), 1000),
    []
  )

  async function searchMovies(currentValue) {
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
      if (data.Search) {
        const movieId = []
        for (const movie of movies) {
          movieId.push(movie.omdb_id)
        }
        for (const movieData of data.Search) {
          if (movieId.includes(movieData.imdbID)) {
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

  const handleChange = (e) => {
    setInputValue(e.target.value)
    debouncedSearch(e.target.value)
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
