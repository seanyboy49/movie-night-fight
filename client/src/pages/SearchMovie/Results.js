import React from 'react'

import { MovieLi, MovieUl, MovieRevealButton } from './styled'
import openArrow from '../../images/arrow-down.svg'
import { BebasText } from '../../styles/Text'

const Results = ({ movies }) => {
  return (
    <MovieUl>
      {movies.map((movie) => {
        return (
          <MovieLi key={movie.imdbID}>
            <BebasText size={'24px'} align={'left'}>
              {movie.Title}
            </BebasText>
            <MovieRevealButton>
              <img src={openArrow} alt="open arrow" />
            </MovieRevealButton>
          </MovieLi>
        )
      })}
    </MovieUl>
  )
}

export default Results
