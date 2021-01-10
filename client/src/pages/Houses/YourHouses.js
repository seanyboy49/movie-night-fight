import React from 'react'

import { BebasText } from '../../styles/Text'
import { HousesComponentContainer, HouseRedirectLink } from './styled'
import House from './House'

const YourHouses = ({ houses }) => {
  return (
    <HousesComponentContainer>
      <BebasText size={'30px'}>Your Houses</BebasText>
      <div>
        {houses.map((house) => {
          const housePath = `/houses/${house.name}`.replace(/\s+/g, '')
          const location = {
            pathname: housePath,
            state: house,
          }
          return (
            <HouseRedirectLink key={house.id} to={location}>
              <House name={house.name} members={house.users} />
            </HouseRedirectLink>
          )
        })}
      </div>
    </HousesComponentContainer>
  )
}

export default YourHouses
