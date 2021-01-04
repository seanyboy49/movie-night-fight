import React from 'react'

import { PosterContainer } from '../../styles/Background'
import { useMovies } from '../../providers/Movies'
import PosterStack from '../../components/PosterStack'
import NoMovies from './NoMovies'
import { LoadingText } from '../../styles/Text'
import reel from '../../images/film-reel.svg'
import { ReelImage } from '../../styles/LoadingReel'

const Posters = () => {
  const { movies, isLoading } = useMovies()

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
