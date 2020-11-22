import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth } from '../../auth'

const MoviesContext = React.createContext()

export const useMovies = () => {
  return useContext(MoviesContext) || {}
}

const MoviesProvider = ({ children, value }) => {
  const [logged] = useAuth()

  if (!logged) {
    return <Redirect to="/login" />
  }

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  )
}

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({ movies: PropTypes.array }),
}

export default MoviesProvider
