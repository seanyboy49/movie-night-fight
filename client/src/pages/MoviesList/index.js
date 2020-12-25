import React, { useCallback, useEffect, useState } from 'react'

import { MovieListBackground, PosterContainer } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import PosterStack from '../../components/PosterStack'
import { useConfiguration } from '../../providers/Configuration'

const MoviesList = () => {
  const { apiUrl } = useConfiguration()
  const [movies, setMovies] = useState([])

  const getUserSavedMovies = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH_KEY'))
    try {
      const response = await fetch(`${apiUrl}/movies`, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      })
      const data = await response.json()
      setMovies(data)
    } catch (error) {
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
        <PosterStack movies={movies} />
      </PosterContainer>
    </MovieListBackground>
  )
}

export default MoviesList
