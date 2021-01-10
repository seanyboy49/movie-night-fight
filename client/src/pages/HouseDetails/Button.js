import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { TicketButtonContainer } from './styled'
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

const Button = ({ onClick, userHouseNames, houseDetail }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { apiUrl } = useConfiguration()
  const [isLoading, setIsLoading] = useState(false)
  const { getUserHouses } = useHouses()

  const leaveHouse = async (id) => {
    setIsLoading(true)
    try {
      const response = await authFetch(`${apiUrl}/houses/${id}/memberships`, {
        method: 'DELETE',
      })
      const data = await response.json()
      getUserHouses()
      setIsLoading(false)
      // if user is the last person in house, redirect back to house route
      if (!data.houseDetail) {
        dispatch({
          type: 'REMOVE',
          message: '',
        })
        return history.push('/houses')
      } else {
        onClick(data.houseDetail)
      }
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
      onClick(data)
      getUserHouses()
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
      setIsLoading(false)
    }
  }
  return (
    <TicketButtonContainer>
      <Ticket width={'220'}>
        <LeftCutout />
        {isLoading && <ReelImage />}
        {!isLoading &&
          (!userHouseNames.includes(houseDetail.name) ? (
            <TicketButton onClick={() => joinHouse(houseDetail.id)}>
              join this house
            </TicketButton>
          ) : (
            <TicketButton onClick={() => leaveHouse(houseDetail.id)}>
              leave this house
            </TicketButton>
          ))}
        <RightCutout />
      </Ticket>
    </TicketButtonContainer>
  )
}

export default Button
