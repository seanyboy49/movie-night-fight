import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { useAuth } from '../../auth'
import NavigationHeader from '../NavigationHeader'

function getPreviousUrlInHistory({ isHouseDetailRoute }) {
  if (isHouseDetailRoute) {
    return '/houses'
  }
}

const Layout = ({ children }) => {
  const [logged] = useAuth()
  const isHouseDetailRoute = useRouteMatch('/houses/:houseName')?.isExact

  const previousUrlInHistory = getPreviousUrlInHistory({ isHouseDetailRoute })

  if (logged) {
    return (
      <>
        <NavigationHeader backLink={previousUrlInHistory} />
        {children}
      </>
    )
  }
  return (
    <>
      <NavigationHeader background="#D70808" color={'white'} />
      {children}
    </>
  )
}

export default Layout
