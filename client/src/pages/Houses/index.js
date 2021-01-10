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
  const { allUserHouses, isLoading } = useHouses()

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
      {allUserHouses.length === 0 ? (
        <NoHouses />
      ) : (
        <YourHouses houses={allUserHouses} />
      )}
      <HouseSearch />
    </HousesContainer>
  )
}

export default Houses
