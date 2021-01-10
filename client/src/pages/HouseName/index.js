import React, { useState } from 'react'
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

function getHouseName(allUsersHouses) {
  const HouseNames = []
  allUsersHouses.forEach((house) => {
    HouseNames.push(house.name)
  })
  return HouseNames
}

const HouseName = () => {
  const { allUsersHouses } = useHouses()
  const { apiUrl } = useConfiguration()
  const location = useLocation()
  const [viewingHouse, setViewingHouse] = useState(location.state)
  const [isLoading, setIsLoading] = useState(false)
  const userHouseNames = getHouseName(allUsersHouses)
  const isInHouse = userHouseNames.includes(viewingHouse.name)

  const totalHouseMates = viewingHouse['users'].length

  const leaveHouse = async (id) => {
    setIsLoading(true)
    try {
      const response = await authFetch(`${apiUrl}/houses/${id}/memberships`, {
        method: 'DELETE',
      })
      const data = await response.json()
      console.log(data)
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
      setIsLoading(false)
    }
  }

  const joinHouse = async (id) => {
    setIsLoading(true)
    try {
      const response = await authFetch(`${apiUrl}/houses/${id}/memberships`, {
        method: 'POST',
      })
      const data = await response.json()
      setViewingHouse(data)
      console.log(data)
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
      setIsLoading(false)
    }
  }

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
        <TicketButtonContainer>
          <Ticket width={'220'}>
            <LeftCutout />
            {isLoading && <ReelImage />}
            {!isLoading &&
              (!isInHouse ? (
                <TicketButton onClick={() => joinHouse(viewingHouse.id)}>
                  join this house
                </TicketButton>
              ) : (
                <TicketButton onClick={() => leaveHouse(viewingHouse.id)}>
                  leave this house
                </TicketButton>
              ))}
            <RightCutout />
          </Ticket>
        </TicketButtonContainer>
      </HouseNameData>
    </HouseNameContainer>
  )
}

export default HouseName
