import React, { useState, useCallback, useEffect } from 'react'

import { HousesContainer } from './styled'
import NoHouses from './ NoHouses'
import HouseSearch from './HouseSearch'
import YourHouses from './YourHouses'
import { LoadingText } from '../../styles/Text'
import reel from '../../images/film-reel.svg'
import { ReelImage } from '../../styles/LoadingReel'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'

const Houses = () => {
  const { apiUrl } = useConfiguration()
  const [isHouses, setIsHouses] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [houses, setHouses] = useState([])

  const getUserHouses = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await authFetch(`${apiUrl}/joined-houses`)
      const data = await response.json()
      setHouses(data)
      if (data.length === 0) {
        setIsHouses(true)
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('error', error)
    }
  }, [apiUrl, setHouses, setIsHouses, setIsLoading])

  useEffect(() => {
    getUserHouses()
  }, [getUserHouses])

  if (isLoading) {
    return (
      <HousesContainer>
        <LoadingText isActive={isLoading} size={'60px'}>
          Loading Movies...
        </LoadingText>
        <ReelImage src={reel} alt="reel" isActive={isLoading} />
      </HousesContainer>
    )
  }

  return (
    <HousesContainer>
      {isHouses ? <NoHouses /> : <YourHouses houses={houses} />}
      <HouseSearch />
    </HousesContainer>
  )
}

export default Houses
