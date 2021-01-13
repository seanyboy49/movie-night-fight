import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import ConfigurationProvider from './providers/Configuration'
import Toast from './components/Toast'
import LoggedOut from './pages/LoggedOut'
import LoggedIn from './pages/LoggedIn'
import config from './config'

const { apiUrl } = config

const App = () => {
  return (
    <ConfigurationProvider value={{ apiUrl }}>
      <Router>
        <Switch>
          <Route path="/public">
            <LoggedOut />
          </Route>

          <Route path="/app">
            <LoggedIn />
          </Route>

          {/* Catchall redirect */}
          {/* <Redirect from="/" to="/movies-list" /> */}
        </Switch>
      </Router>
      <Toast />
    </ConfigurationProvider>
  )
}

export default App
