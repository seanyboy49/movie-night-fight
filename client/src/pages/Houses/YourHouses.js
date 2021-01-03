import React from 'react'

import { BebasText } from '../../styles/Text'
import { HousesComponentContainer } from './styled'
import House from './House'

const YourHouses = ({ houses }) => {
  return (
    <HousesComponentContainer>
      <BebasText size={'30px'}>Your Houses</BebasText>
      <div>
        {houses.map((house) => {
          return (
            <House key={house.id} name={house.name} members={house.users} />
          )
        })}
      </div>
    </HousesComponentContainer>
  )
}

export default YourHouses
