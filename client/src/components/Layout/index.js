import React from 'react'
import { useAuth } from '../../auth'
import NavigationHeader from '../NavigationHeader'

const Layout = ({ children }) => {
  const [logged] = useAuth()

  if (!logged) {
    return (
      <>
        <NavigationHeader background="#D70808" color={'white'} />
        {children}
      </>
    )
  }
  return children
}

export default Layout
