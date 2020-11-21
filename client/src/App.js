import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import MoviesList from './pages/MoviesList'
import ConfigurationProvider from './providers/Configuration'

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://0.0.0.0:8000/api'
    : 'https://movienightfight.herokuapp.com/api'

function App() {
  return (
    <ConfigurationProvider value={{ apiUrl }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/movies-list">
            <MoviesList />
          </Route>
        </Switch>
      </Router>
    </ConfigurationProvider>
  )
}

export default App
