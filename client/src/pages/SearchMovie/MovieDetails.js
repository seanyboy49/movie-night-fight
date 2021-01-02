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
    <MovieDetailContainer isActive={revealDetail(movie.Title)}>
      <img src={movie.Poster} alt="movie poster" width="113px" />
      <AddMovieButton />
    </MovieDetailContainer>
  )
}

export default MovieDetails
