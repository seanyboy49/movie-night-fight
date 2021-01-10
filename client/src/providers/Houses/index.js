import React, { useContext, useState, useCallback } from 'react'

import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'

const HouseContext = React.createContext()

export const useHouses = () => {
  return useContext(HouseContext) || {}
}

const HouseProviders = ({ children }) => {
  const { apiUrl } = useConfiguration()
  const [currentHouse, setCurrentHouse] = useState()
  const [allUsersHouses, setAllUserHouses] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getUserHouses = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await authFetch(`${apiUrl}/joined-houses`)
      const data = await response.json()
      setAllUserHouses(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('error', error)
    }
  }, [apiUrl, setAllUserHouses, setIsLoading])

  return (
    <HouseContext.Provider
      value={{
        currentHouse,
        allUsersHouses,
        isLoading,
        setCurrentHouse,
        getUserHouses,
      }}
    >
      {children}
    </HouseContext.Provider>
  )
}

export default HouseProviders
