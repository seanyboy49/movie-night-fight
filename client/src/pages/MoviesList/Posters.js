import React, { useState } from 'react'

import PosterStack from '../../components/PosterStack'
import NoMovies from './NoMovies'
import NUX from '../../components/NUX'

import useLocalStorage from '../../hooks/useLocalStorage'
import { useMovies } from '../../providers/Movies'

import { LoadingText } from '../../styles/Text'
import { PosterContainer } from '../../styles/Background'
import { ReelImage } from '../../styles/LoadingReel'

import reel from '../../images/film-reel.svg'

const Posters = () => {
  const [nuxInstructions, setNuxInstructions] = useState(undefined)
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
        <>
          <NUX instructions={nuxInstructions} />
          <PosterStack
            movies={movies}
            includeNUX={!isNUXCompleted}
            onClickNux={setNuxInstructions}
          />
        </>
      ) : (
        <NoMovies />
      )}
    </PosterContainer>
  )
}

export default Posters
