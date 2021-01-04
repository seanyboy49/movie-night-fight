import React, { useState } from 'react'

import { MovieLi, MovieUl, Button, MovieTitleContainer } from './styled'
import openArrow from '../../images/arrow-down.svg'
import { BebasText } from '../../styles/Text'
import MovieDetails from './MovieDetails'
import { ReelImage } from '../../styles/LoadingReel'

const Results = ({ movies, isSearchResultsLoading }) => {
  const [selectedMovie, setSelectedMovie] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function selectReveal(title) {
    if (title === selectedMovie && isOpen) {
      setIsOpen(false)
      return
    }
    setSelectedMovie(title)
    setIsOpen(true)
  }

  if (isSearchResultsLoading) {
    return (
      <div>
        <ReelImage width="50" isActive={isSearchResultsLoading} />
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
              selectedMovie={selectedMovie}
              isOpen={isOpen}
            />
          </MovieLi>
        )
      })}
    </MovieUl>
  )
}

export default Results
