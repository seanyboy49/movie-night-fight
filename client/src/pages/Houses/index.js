import React, { useState, useEffect } from 'react'

import { HousesContainer } from './styled'
import NoHouses from './NoHouses'
import HouseSearch from './HouseSearch'
import YourHouses from './YourHouses'
import { LoadingText } from '../../styles/Text'
import reel from '../../images/film-reel.svg'
import { ReelImage } from '../../styles/LoadingReel'
import { useHouses } from '../../providers/Houses'

const Houses = () => {
  const { allUsersHouses, isLoading, getUserHouses } = useHouses()
  const [isHouses] = useState(allUsersHouses === 0)

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
      {isHouses ? <NoHouses /> : <YourHouses houses={allUsersHouses} />}
      <HouseSearch />
    </HousesContainer>
  )
}

export default Houses
