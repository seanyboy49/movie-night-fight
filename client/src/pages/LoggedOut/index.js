import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Home from '../Home'
import Login from '../Login'
import Signup from '../SignUp'
import NavigationHeader from '../../components/NavigationHeader'

const LoggedOut = () => {
  const { path } = useRouteMatch()

  return (
    <>
      <NavigationHeader background="#D70808" color={'white'} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={`${path}/login`}>
          <Login />
        </Route>
        <Route path={`${path}/signup`}>
          <Signup />
        </Route>
      </Switch>
    </>
  )
}

export default LoggedOut
