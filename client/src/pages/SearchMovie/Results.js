import React, { useState } from 'react'

import { MovieLi, MovieUl, Button, MovieTitleContainer } from './styled'
import openArrow from '../../images/arrow-down.svg'
import { BebasText } from '../../styles/Text'
import MovieDetails from './MovieDetails'
import { ReelImage } from '../../styles/LoadingReel'

const Results = ({ movies, loadSearchMovies }) => {
  const [revealSelected, setRevealSelected] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function selectReveal(title) {
    if (title === revealSelected && isOpen) {
      setIsOpen(false)
      return
    }
    setRevealSelected(title)
    setIsOpen(true)
  }

  if (loadSearchMovies) {
    return (
      <div>
        <ReelImage width="50" isActive={loadSearchMovies} />
      </div>
    )
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
              <Button onClick={() => selectReveal(movie.imdbID)}>
                <img src={openArrow} alt="open arrow" />
              </Button>
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
