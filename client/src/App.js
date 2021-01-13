import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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

          <Route path="/">
            <LoggedIn />
          </Route>
        </Switch>
      </Router>
      <Toast />
    </ConfigurationProvider>
  )
}

export default App
