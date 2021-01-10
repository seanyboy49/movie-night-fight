import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
  HouseNameText,
  Housemate,
  HouseMates,
  HouseNameContainer,
  HouseNameData,
} from './styled'

import { useHouses } from '../../providers/Houses'
import Button from './Button'

function getHouseNames(allUsersHouses) {
  return allUsersHouses.map((house) => house.name)
}

const HouseDetails = () => {
  const { allUserHouses } = useHouses()
  const location = useLocation()
  const [houseDetail, setHouseDetail] = useState(location.state)
  const houseNames = getHouseNames(allUserHouses)

  const totalHouseMates = houseDetail['users'].length

  return (
    <HouseNameContainer>
      <HouseNameData>
        <HouseNameText size={'36px'}>{houseDetail.name}</HouseNameText>
        <HouseNameText size={'18px'}>
          {totalHouseMates} housemates have already joined
        </HouseNameText>
        <HouseMates>
          {houseDetail.users.map((user) => {
            return <Housemate key={user.user}>{user.user}</Housemate>
          })}
        </HouseMates>
        <Button
          onClick={setHouseDetail}
          userHouseNames={houseNames}
          houseDetail={houseDetail}
        />
      </HouseNameData>
    </HouseNameContainer>
  )
}

export default HouseDetails
