import React, { useContext, useState, useCallback, useEffect } from 'react'

import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import useLocalStorage from '../../hooks/useLocalStorage'
import { determineCurrentHouse } from './utils'

const HouseContext = React.createContext()

export const useHouses = () => {
  return useContext(HouseContext) || {}
}

const HousesProvider = ({ children }) => {
  const { apiUrl } = useConfiguration()
  const { get, set } = useLocalStorage()

  const [allUserHouses, setAllUserHouses] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const storageCurrentHouse = get('currentHouse')
    ? JSON.parse(get('currentHouse'))
    : undefined
  const currentHouse = determineCurrentHouse(allUserHouses, storageCurrentHouse)

  if (!storageCurrentHouse && currentHouse) {
    set('currentHouse', JSON.stringify(currentHouse))
  }

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

  useEffect(() => {
    getUserHouses()
  }, [getUserHouses])

  return (
    <HouseContext.Provider
      value={{
        currentHouse,
        allUserHouses,
        isLoading,
        getUserHouses,
      }}
    >
      {children}
    </HouseContext.Provider>
  )
}

export default HousesProvider
