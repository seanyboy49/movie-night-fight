import React, { useState } from 'react'

import PosterStack from '../../components/PosterStack'
import NoMoviesOrHouse from './NoMoviesOrHouse'
import LightBox from '../../components/LightBox'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useMovies } from '../../providers/Movies'
import { LoadingText } from '../../styles/Text'
import { PosterContainer } from '../../styles/Background'
import { ReelImage } from '../../styles/LoadingReel'
import reel from '../../images/film-reel.svg'
import routes from '../../routes'

const { searchMovies } = routes.app

const Posters = ({ setSelectedMovie }) => {
  const [lightBox, setLightBox] = useState(undefined)
  const { movies, isLoading, getUserSavedMovies } = useMovies()

  const { get, set } = useLocalStorage()

  const isSwipeLeftComplete = get('isSwipeLeftComplete')
  const isSwipeRightComplete = get('isSwipeRightComplete')
  const isDownSwipeComplete = get('isDownSwipeComplete')
  const nuxStates = {
    isSwipeLeftComplete,
    isSwipeRightComplete,
    isDownSwipeComplete,
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
      <PosterContainer>
        {movies && movies.length !== 0 ? (
          <>
            <LightBox category={lightBox} />
            <PosterStack
              movies={movies}
              onClick={setLightBox}
              onRelease={set}
              nuxStates={nuxStates}
              getUserSavedMovies={getUserSavedMovies}
              setSelectedMovie={setSelectedMovie}
            />
          </>
        ) : (
          <NoMoviesOrHouse text={['add', 'movies']} redirectTo={searchMovies} />
        )}
      </PosterContainer>
    </>
  )
}

export default Posters
