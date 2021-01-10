import React from 'react'
import { Link } from 'react-router-dom'

import { BebasText } from '../../styles/Text'
import { HousesComponentContainer } from './styled'
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
          console.log(house)
          return (
            <Link key={house.id} to={location}>
              <House name={house.name} members={house.users} />
            </Link>
          )
        })}
      </div>
    </HousesComponentContainer>
  )
}

export default YourHouses
