import React from 'react'

import { HousesContainer } from './styled'
import NoHouses from './ NoHouses'
import HouseSearch from './HouseSearch'
import YourHouses from './YourHouses'

const Houses = () => {
  return (
    <HousesContainer>
      {/* <NoHouses /> */}
      <YourHouses />
      <HouseSearch />
    </HousesContainer>
  )
}

export default Houses
