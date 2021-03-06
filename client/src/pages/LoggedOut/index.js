import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../Home'
import Login from '../Login'
import Signup from '../SignUp'
import NavigationHeader from '../../components/NavigationHeader'
import routes from '../../routes'
import { useAuth } from '../../auth'

const { root, home, login, signup } = routes.public
const { root: appRoot } = routes.app

const LoggedOut = () => {
  const [logged] = useAuth()

  if (logged) {
    return <Redirect to={appRoot} />
  }

  return (
    <>
      <NavigationHeader background="#D70808" color={'white'} />
      <Switch>
        <Route path={home} component={Home} />
        <Route path={login} component={Login} />
        <Route path={signup} component={Signup} />
        <Redirect from={root} to={home} />
      </Switch>
    </>
  )
}

export default LoggedOut
