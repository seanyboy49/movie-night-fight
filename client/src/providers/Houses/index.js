import React, { useContext, useState, useCallback, useEffect } from 'react'

import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import useLocalStorage from '../../hooks/useLocalStorage'

const HouseContext = React.createContext()

export const useHouses = () => {
  return useContext(HouseContext) || {}
}

const HouseProviders = ({ children }) => {
  const { apiUrl } = useConfiguration()
  const { get } = useLocalStorage()

  const [allUserHouses, setAllUserHouses] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getCurrentHouse = get('currentHouse')
  const firstHouse = allUserHouses ? allUserHouses[0] : {}
  const currentHouse = getCurrentHouse
    ? JSON.parse(getCurrentHouse)
    : firstHouse

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

export default HouseProviders
