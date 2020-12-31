import React, { useState, useCallback, useEffect } from 'react'

import { PosterContainer } from '../../styles/Background'
import { useConfiguration } from '../../providers/Configuration'
import PosterStack from '../../components/PosterStack'
import NoMovies from './NoMovies'
import { LoadingText } from '../../styles/Text'
import reel from '../../images/film-reel.svg'
import { ReelImage } from '../../styles/LoadingReel'
import { authFetch } from '../../auth'

const Posters = () => {
  const { apiUrl } = useConfiguration()
  const [movies, setMovies] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const getUserSavedMovies = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await authFetch(`${apiUrl}/watchlist`)
      const data = await response.json()
      setMovies(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('error', error)
    }
  }, [apiUrl])

  useEffect(() => {
    getUserSavedMovies()
  }, [getUserSavedMovies])

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
