import React, { useState } from 'react'

import PosterStack from '../../components/PosterStack'
import NoMovies from './NoMovies'
import LightBox from '../../components/LightBox'

import useLocalStorage from '../../hooks/useLocalStorage'
import { useMovies } from '../../providers/Movies'

import { LoadingText } from '../../styles/Text'
import { PosterContainer } from '../../styles/Background'
import { ReelImage } from '../../styles/LoadingReel'

import reel from '../../images/film-reel.svg'

const Posters = () => {
  const [lightBox, setLightBox] = useState(undefined)
  const { movies, isLoading } = useMovies()

  const { get, remove, set } = useLocalStorage()

  const isSwipeLeftComplete = get('isSwipeLeftComplete')
  const isSwipeRightComplete = get('isSwipeRightComplete')
  const nuxStates = {
    isSwipeLeftComplete,
    isSwipeRightComplete,
  }

  function clearAllNux() {
    console.log('hi')
    remove('isSwipeLeftComplete')
    remove('isSwipeRightComplete')
  }

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
    <>
      <button onClick={clearAllNux}>clearAllNux</button>
      <PosterContainer>
        {movies && movies.length !== 0 ? (
          <>
            <LightBox category={lightBox} />
            <PosterStack
              movies={movies}
              onLightBoxClick={setLightBox}
              onLightBoxClickComplete={set}
              nuxStates={nuxStates}
            />
          </>
        ) : (
          <NoMovies />
        )}
      </PosterContainer>
    </>
  )
}

export default Posters
