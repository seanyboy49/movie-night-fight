import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'

import MoviesList from '../MoviesList'
import Houses from '../Houses'
import SearchMovie from '../SearchMovie'
import HouseDetails from '../HouseDetails'
import NavigationHeader from '../../components/NavigationHeader'
import MoviesProvider from '../../providers/Movies'
import HousesProvider from '../../providers/Houses'
import { useAuth } from '../../auth'
import routes from '../../routes'

const {
  root: appRoot,
  moviesList,
  houses,
  houseDetail,
  searchMovies,
} = routes.app
const { root: publicRoot } = routes.public

function getPreviousUrlInHistory({ isHouseDetailRoute }) {
  if (isHouseDetailRoute) {
    return houses
  }
}

const LoggedIn = () => {
  const [logged] = useAuth()
  const isHouseDetailRoute = useRouteMatch('/houses/:houseName')?.isExact
  const previousUrlInHistory = getPreviousUrlInHistory({ isHouseDetailRoute })

  if (!logged) {
    return <Redirect to={publicRoot} />
  }

  return (
    <>
      <NavigationHeader backLink={previousUrlInHistory} />
      <Switch>
        <MoviesProvider>
          <Route exact path={appRoot} component={MoviesList} />
          <Route path={moviesList} component={MoviesList} />

          <HousesProvider>
            <Route exact path={houses} component={Houses} />
            <Route path={houseDetail} component={HouseDetails} />
          </HousesProvider>
          <Route path={searchMovies} component={SearchMovie} />
        </MoviesProvider>
      </Switch>
    </>
  )
}

export default LoggedIn
