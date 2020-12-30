import React, { useCallback, useEffect, useState } from 'react'

import { BebasText } from '../../styles/Text'
import { HousesComponentContainer } from './styled'
import House from './House'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'

const YourHouse = () => {
  const { apiUrl } = useConfiguration()
  const [isLoading, setIsLoading] = useState(false)

  const getUserHouses = useCallback(async () => {
    setIsLoading(true)
    try {
      console.log('joined houses')
      const response = await authFetch(`${apiUrl}/joined-houses`)
      const data = await response.json()
      console.log(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('error', error)
    }
  }, [apiUrl])

  useEffect(() => {
    getUserHouses()
  }, [getUserHouses])

  return (
    <HousesComponentContainer>
      <BebasText size={'30px'}>Your Houses</BebasText>
      <div>
        <House />
      </div>
    </HousesComponentContainer>
  )
}

export default YourHouse
