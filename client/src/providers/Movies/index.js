import React, { useContext, useState, useCallback, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useConfiguration } from '../Configuration'
import { useAuth, authFetch } from '../../auth'

const MoviesContext = React.createContext()

export const useMovies = () => {
  return useContext(MoviesContext) || {}
}

const MoviesProvider = ({ children }) => {
  const [logged] = useAuth()
  const { apiUrl } = useConfiguration()
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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

  if (!logged) {
    return <Redirect to="/login" />
  }

  return (
    <MoviesContext.Provider value={{ movies, isLoading, getUserSavedMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({ movies: PropTypes.array }),
}

export default MoviesProvider
