import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useAuth } from '../../auth'

const AuthRedirect = ({ children, loggedOutRoutes = false }) => {
  const [logged] = useAuth()

  // Logged-out routes. e.g, "/", "/login", "/signup"
  if (loggedOutRoutes) {
    if (logged) {
      return <Redirect to="/movies-list" />
    }

    return children
  }

  // Logged in routes
  if (!logged) {
    return <Redirect to="/" />
  }
  return children
}

AuthRedirect.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthRedirect
