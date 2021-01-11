import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
  Ticket,
  LeftCutout,
  RightCutout,
  TicketButton,
} from '../../styles/Ticket'
import { CreateHouseContainer } from './styled'
import { authFetch } from '../../auth'
import { useConfiguration } from '../../providers/Configuration'
import { useHouses } from '../../providers/Houses'

const CreateHouse = ({ inputValue }) => {
  const { getUserHouses } = useHouses()
  const history = useHistory()
  const dispatch = useDispatch()
  const { apiUrl } = useConfiguration()

  const createNewHouse = async () => {
    const body = {
      name: inputValue,
    }

    try {
      const response = await authFetch(`${apiUrl}/houses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const data = await response.json()
      dispatch({
        type: 'SUCCESS',
        message: `Success! You have created ${inputValue}`,
      })
      getUserHouses()
      const housePath = `/houses/${data.name}`.replace(/\s+/g, '')
      const location = {
        pathname: housePath,
        state: data,
      }
      return history.push(location)
    } catch (error) {
      dispatch({
        type: 'FAIL',
        message: 'Something went wrong. Please try again.',
      })
      console.log('error', error)
    }
  }

  return (
    <CreateHouseContainer>
      <p>
        <b>{inputValue}</b> Does not exist yet. Would you like to create the
        house?
      </p>
      <Ticket width={'250'}>
        <LeftCutout />
        <TicketButton onClick={createNewHouse}>Create this House</TicketButton>
        <RightCutout />
      </Ticket>
    </CreateHouseContainer>
  )
}

export default CreateHouse
