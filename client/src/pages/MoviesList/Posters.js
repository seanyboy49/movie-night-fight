import React from 'react'

import PosterStack from '../../components/PosterStack'
import NoMovies from './NoMovies'
import { useMovies } from '../../providers/Movies'
import { LoadingText } from '../../styles/Text'
import { PosterContainer } from '../../styles/Background'
import reel from '../../images/film-reel.svg'
import { ReelImage } from '../../styles/LoadingReel'
import useLocalStorage from '../../hooks/useLocalStorage'

const Posters = () => {
  const { movies, isLoading } = useMovies()

  const { get } = useLocalStorage()

  const isNUXCompleted = get('isNUXCompleted')

  if (isLoading) {
    return (
      <PosterContainer>
        <LoadingText isActive={isLoading} size={'60px'}>
          Loading Movies...
        </LoadingText>
        <ReelImage src={reel} alt="reel" isActive={isLoading} />
      </PosterContainer>
    )
  }

  return (
    <PosterContainer>
      {movies && movies.length !== 0 ? (
        <PosterStack movies={movies} />
      ) : (
        <NoMovies />
      )}
    </PosterContainer>
  )
}

export default Posters
