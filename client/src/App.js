import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import MoviesList from './pages/MoviesList'
import ConfigurationProvider from './providers/Configuration'
import MoviesProvider from './providers/Movies'
import config from './config'
import Signup from './pages/SignUp'
import Toast from './components/Toast'
import Houses from './pages/Houses'
import SearchMovie from './pages/SearchMovie'
import HouseDetails from './pages/HouseDetails'
import HousesProvider from './providers/Houses'

const { apiUrl } = config

const App = () => {
  return (
    <ConfigurationProvider value={{ apiUrl }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <MoviesProvider>
            <HousesProvider>
              <Route path="/movies-list">
                <MoviesList />
              </Route>
              <Route exact path="/houses">
                <Houses />
              </Route>
              <Route exact path="/houses/:houseName">
                <HouseDetails />
              </Route>
            </HousesProvider>
            <Route path="/search-movies">
              <SearchMovie />
            </Route>
          </MoviesProvider>
        </Switch>
      </Router>
      <Toast />
    </ConfigurationProvider>
  )
}

export default App
