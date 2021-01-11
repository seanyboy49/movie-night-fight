import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import MoviesList from './pages/MoviesList'
import Houses from './pages/Houses'
import SearchMovie from './pages/SearchMovie'
import Signup from './pages/SignUp'
import HouseDetails from './pages/HouseDetails'
import ConfigurationProvider from './providers/Configuration'
import MoviesProvider from './providers/Movies'
import HouseProvider from './providers/Houses'
import Toast from './components/Toast'
import Layout from './components/Layout'
import config from './config'

const { apiUrl } = config

const App = () => {
  return (
    <ConfigurationProvider value={{ apiUrl }}>
      <Router>
        <Layout>
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
              <Route path="/movies-list">
                <MoviesList />
              </Route>
              <HouseProvider>
                <Route exact path="/houses">
                  <Houses />
                </Route>
                <Route exact path="/houses/:houseName">
                  <HouseDetails />
                </Route>
              </HouseProvider>
              <Route path="/search-movies">
                <SearchMovie />
              </Route>
            </MoviesProvider>
          </Switch>
        </Layout>
      </Router>
      <Toast />
    </ConfigurationProvider>
  )
}

export default App
