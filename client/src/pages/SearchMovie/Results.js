import React from 'react'

import { MovieLi } from './styled'

const Result = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return <MovieLi key={movie.imdbID}>{movie.Title}</MovieLi>
      })}
    </ul>
  )
}

export default Result
