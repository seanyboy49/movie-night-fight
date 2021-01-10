import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
  HouseNameText,
  Housemate,
  HouseMates,
  HouseNameContainer,
  HouseNameData,
  TicketButtonContainer,
} from './styled'
import {
  Ticket,
  LeftCutout,
  RightCutout,
  TicketButton,
} from '../../styles/Ticket'
import { ReelImage } from '../../styles/LoadingReel'
import { authFetch } from '../../auth'
import { useConfiguration } from '../../providers/Configuration'
import { useHouses } from '../../providers/Houses'
import Button from './Button'

const HouseName = () => {
  const { allUsersHouses } = useHouses()
  const location = useLocation()
  const [viewingHouse, setViewingHouse] = useState(location.state)
  const [userHouseNames, setUserHouseNames] = useState([])

  const totalHouseMates = viewingHouse['users'].length

  function getHouseName(allUsersHouses) {
    const HouseNames = []
    allUsersHouses.forEach((house) => {
      HouseNames.push(house.name)
    })
    return HouseNames
  }

  useEffect(() => {
    setUserHouseNames(getHouseName(allUsersHouses))
  }, [allUsersHouses])

  return (
    <HouseNameContainer>
      <HouseNameData>
        <HouseNameText size={'36px'}>{viewingHouse.name}</HouseNameText>
        <HouseNameText size={'18px'}>
          {totalHouseMates} housemates have already joined
        </HouseNameText>
        <HouseMates>
          {viewingHouse.users.map((user) => {
            return <Housemate key={user.user}>{user.user}</Housemate>
          })}
        </HouseMates>
        <Button
          setViewingHouse={setViewingHouse}
          userHouseNames={userHouseNames}
          viewingHouse={viewingHouse}
        />
      </HouseNameData>
    </HouseNameContainer>
  )
}

export default HouseName
