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

  function revealDetail(title) {
    if (title === revealSelected && isOpen) {
      return true
    } else {
      return false
    }
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
              <MovieRevealButton
                isActive={revealDetail(movie.Title)}
                onClick={() => selectReveal(movie.Title)}
              >
                <img src={openArrow} alt="open arrow" />
              </MovieRevealButton>
            </MovieTitleContainer>
            <MovieDetails poster={movie.Poster} />
          </MovieLi>
        )
      })}
    </MovieUl>
  )
}

export default Results
