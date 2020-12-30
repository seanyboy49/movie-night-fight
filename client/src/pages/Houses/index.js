import React, { useState } from 'react'

import { HousesContainer } from './styled'
import NoHouses from './ NoHouses'
import HouseSearch from './HouseSearch'
import YourHouses from './YourHouses'

const Houses = () => {
  const [houses, setHouses] = useState([])

  return (
    <HousesContainer>
      {houses === 0 && <NoHouses />}
      {houses !== 0 && <YourHouses houses={houses} setHouses={setHouses} />}
      <HouseSearch />
    </HousesContainer>
  )
}

export default Houses
