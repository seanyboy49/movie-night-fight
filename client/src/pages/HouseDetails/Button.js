import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

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

const Button = ({
  onClick,
  userHouseNames,
  houseDetail,
  setCurrentHouse,
  getCurrentHouse,
}) => {
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
      // if house is set as current house, remove it from local storage
      const currentHouse = JSON.parse(getCurrentHouse('currentHouse'))
      if (currentHouse.id === houseDetail.id) {
        setCurrentHouse('currentHouse', '')
      }

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
  )
}

export default Button
