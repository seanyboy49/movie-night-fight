import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import MoviesList from '../MoviesList'
import Houses from '../Houses'
import SearchMovie from '../SearchMovie'
import HouseDetails from '../HouseDetails'
import NavigationHeader from '../../components/NavigationHeader'
import MoviesProvider from '../../providers/Movies'
import HousesProvider from '../../providers/Houses'

const LoggedIn = () => {
  const { path } = useRouteMatch()

  return (
    <>
      <NavigationHeader background="#D70808" color={'white'} />
      <Switch>
        <MoviesProvider>
          <Route exact path={`/`}>
            <MoviesList />
          </Route>
          <HousesProvider>
            <Route path={`/houses`}>
              <Houses />
            </Route>
            <Route path={`/houses/:houseName`}>
              <HouseDetails />
            </Route>
          </HousesProvider>
          <Route path={`/search-movies`}>
            <SearchMovie />
          </Route>
        </MoviesProvider>
      </Switch>
    </>
  )
}

export default LoggedIn
