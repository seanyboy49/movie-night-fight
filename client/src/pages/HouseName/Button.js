import React, { useState } from 'react'

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
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Button = ({ setViewingHouse, userHouseNames, viewingHouse }) => {
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
      console.log(data)
      getUserHouses()
      setIsLoading(false)
      if (data.message === 'Successfully left and deleted plant kingdom') {
        dispatch({
          type: 'REMOVE',
          message: '',
        })
        return history.push('/houses')
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
      setViewingHouse(data)
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
          (!userHouseNames.includes(viewingHouse.name) ? (
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
  )
}

export default Button
