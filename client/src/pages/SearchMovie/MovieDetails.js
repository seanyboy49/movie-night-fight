import React from 'react'

import AddMovieButton from './AddMovieButton'
import { MovieDetailContainer } from './styled'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'

const MovieDetails = ({ movie, revealSelected, isOpen }) => {
  const { apiUrl } = useConfiguration()
  function revealDetail(title) {
    if (title === revealSelected && isOpen) {
      return true
    } else {
      return false
    }
  }

  async function addMovie(movie) {
    const body = {
      poster_url: movie.Poster,
      name: movie.Title,
      omdb_id: movie.imdbID,
    }
    try {
      const response = await authFetch(`${apiUrl}/watchlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <MovieDetailContainer isActive={revealDetail(movie.imdbID)}>
      <img src={movie.Poster} alt="movie poster" width="130px" />
      <AddMovieButton addMovie={addMovie} movie={movie} />
    </MovieDetailContainer>
  )
}

export default MovieDetails
