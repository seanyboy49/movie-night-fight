import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import MoviesList from './pages/MoviesList'
import ConfigurationProvider from './providers/Configuration'
import MoviesProvider from './providers/Movies'
import config from './config'
import Signup from './pages/SignUp'

const { apiUrl } = config

const App = () => {
  return (
    <ConfigurationProvider value={{ apiUrl }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <MoviesProvider>
            <Route path="/movies-list">
              <MoviesList />
            </Route>
          </MoviesProvider>
        </Switch>
      </Router>
    </ConfigurationProvider>
  )
}

export default App
