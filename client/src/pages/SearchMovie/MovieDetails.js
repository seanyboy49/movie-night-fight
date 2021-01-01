import React from 'react'

import AddMovieButton from './AddMovieButton'
import { MovieDetailContainer } from './styled'

const MovieDetails = ({ poster }) => {
  return (
    <MovieDetailContainer>
      <img src={poster} alt="movie poster" width="113px" />
      <AddMovieButton />
    </MovieDetailContainer>
  )
}

export default MovieDetails
