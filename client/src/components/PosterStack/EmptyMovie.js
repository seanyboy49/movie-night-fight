import React from 'react'

import { NoMovieContainer, NoMoviePoster } from './styled'
import noMovie from '../../images/no-movies.svg'

const EmptyMovie = () => {
  return (
    <NoMovieContainer>
      <NoMoviePoster>
        <p>You haven't added any movies yet</p>
        <img src={noMovie} alt="rain" width="50" />
      </NoMoviePoster>
    </NoMovieContainer>
  )
}

export default EmptyMovie
