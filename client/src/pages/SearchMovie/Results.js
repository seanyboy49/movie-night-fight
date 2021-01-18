import React, { useState } from 'react'

import { Button, MovieTitleContainer } from './styled'
import { ResultLi, ResultUl } from '../../styles/SearchBar'
import openArrow from '../../images/arrow-down.svg'
import { BebasText } from '../../styles/Text'
import MovieDetails from './MovieDetails'
import { ReelImage } from '../../styles/LoadingReel'
import Error from '../../components/Error'

const Results = ({ error, movies, isSearchResultsLoading, handleSearch }) => {
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

  if (!error) {
    return (
      <Error
        textArray={["Whoops! we couldn't", 'complete your search.']}
        onClick={handleSearch}
      />
    )
  }

  if (!movies) {
    return null
  }

  return (
    <ResultUl>
      {movies.map((movie) => {
        return (
          <ResultLi key={movie.imdbID}>
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
          </ResultLi>
        )
      })}
    </ResultUl>
  )
}

export default Results
