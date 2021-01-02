import React, { useState } from 'react'

import {
  MovieLi,
  MovieUl,
  MovieRevealButton,
  MovieTitleContainer,
} from './styled'
import openArrow from '../../images/arrow-down.svg'
import { BebasText } from '../../styles/Text'
import MovieDetails from './MovieDetails'

const Results = ({ movies }) => {
  const [revealSelected, setRevealSelected] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function selectReveal(title) {
    setRevealSelected(title)
    setIsOpen(!isOpen)
  }

  return (
    <MovieUl>
      {movies.map((movie) => {
        return (
          <MovieLi key={movie.imdbID}>
            <MovieTitleContainer>
              <BebasText size={'24px'} align={'left'}>
                {movie.Title}
              </BebasText>
              <MovieRevealButton onClick={() => selectReveal(movie.Title)}>
                <img src={openArrow} alt="open arrow" />
              </MovieRevealButton>
            </MovieTitleContainer>
            <MovieDetails
              movie={movie}
              revealSelected={revealSelected}
              isOpen={isOpen}
            />
          </MovieLi>
        )
      })}
    </MovieUl>
  )
}

export default Results
