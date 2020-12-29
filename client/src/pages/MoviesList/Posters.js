import React, { useState, useCallback, useEffect } from 'react'

import { PosterContainer } from '../../styles/Background'
import { useConfiguration } from '../../providers/Configuration'
import PosterStack from '../../components/PosterStack'
import NoMovies from './NoMovies'
import { Loading } from './styled'
import { OpacityText } from '../../styles/Text'

const Posters = () => {
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

  if (isLoading) {
    return (
      <PosterContainer>
        <Loading isActive={isLoading} />
        <OpacityText isActive={isLoading} size={'60px'}>
          Loading Movies...
        </OpacityText>
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
