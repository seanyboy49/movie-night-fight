import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import {
  HouseNameText,
  Housemate,
  HouseMates,
  HouseNameContainer,
  HouseNameData,
  TicketButtonContainer,
  AssignCurrentHouseButton,
} from './styled'

import { useHouses } from '../../providers/Houses'
import Button from './Button'
import useLocalStorage from '../../hooks/useLocalStorage'

function getHouseNames(allUsersHouses) {
  return allUsersHouses.map((house) => house.name)
}

const HouseDetails = () => {
  const { allUserHouses } = useHouses()
  const location = useLocation()
  const { remove, get, set } = useLocalStorage()
  const history = useHistory()

  const [houseDetail, setHouseDetail] = useState(location.state)
  const houseNames = getHouseNames(allUserHouses)

  const totalHouseMates = houseDetail['users'].length

  function setCurrentHouse() {
    set('currentHouse', JSON.stringify(houseDetail))
    return history.push('/houses')
  }

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
        <TicketButtonContainer>
          <Button
            onClick={setHouseDetail}
            userHouseNames={houseNames}
            houseDetail={houseDetail}
            removeCurrentHouse={remove}
            getCurrentHouse={get}
          />
          {houseNames.includes(houseDetail.name) && (
            <AssignCurrentHouseButton onClick={setCurrentHouse}>
              Set as current house
            </AssignCurrentHouseButton>
          )}
        </TicketButtonContainer>
      </HouseNameData>
    </HouseNameContainer>
  )
}

export default HouseDetails
