import React from 'react'

import AddMovieButton from './AddMovieButton'
import { MovieDetailContainer } from './styled'

const MovieDetails = ({ movie, revealSelected, isOpen }) => {
  function revealDetail(title) {
    if (title === revealSelected && isOpen) {
      return true
    } else {
      return false
    }
  }

  return (
    <MovieDetailContainer isActive={revealDetail(movie.imdbID)}>
      <img src={movie.Poster} alt="movie poster" width="130px" />
      <AddMovieButton movie={movie} />
    </MovieDetailContainer>
  )
}

export default MovieDetails
