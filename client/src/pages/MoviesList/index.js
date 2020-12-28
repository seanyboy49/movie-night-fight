import React, { useCallback, useEffect, useState } from 'react'

import { MovieListBackground, PosterContainer } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import PosterStack from '../../components/PosterStack'
import { useConfiguration } from '../../providers/Configuration'
import NoMovies from './NoMovies'
import { Loading } from './styled'
import { OpacityText } from '../../styles/Text'
import { ReelImage } from '../../styles/LoadingReel'
import reel from '../../images/film-reel.svg'

const MoviesList = () => {
  const { apiUrl } = useConfiguration()
  const [movies, setMovies] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const getUserSavedMovies = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH_KEY'))
    setIsLoading(true)
    try {
      const response = await fetch(`${apiUrl}/movies`, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      })
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

  return (
    <MovieListBackground>
      <Marquee />
      <PosterContainer>
        <Loading isActive={isLoading} />
        <OpacityText isActive={isLoading} size={'60px'}>
          Loading Movies...
        </OpacityText>
        <ReelImage isActive={isLoading} src={reel} />
        {movies && movies.length !== 0 ? (
          <PosterStack movies={movies} />
        ) : (
          <NoMovies />
        )}
      </PosterContainer>
    </MovieListBackground>
  )
}

export default MoviesList
