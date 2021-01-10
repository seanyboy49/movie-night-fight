import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Ticket,
  LeftCutout,
  RightCutout,
  TicketButton,
} from '../../styles/Ticket'
import { CreateHouseContainer } from './styled'
import { authFetch } from '../../auth'
import { useConfiguration } from '../../providers/Configuration'

const CreateHouse = ({ inputValue }) => {
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
        message: `success! you have created ${inputValue}`,
      })
      localStorage.setItem('currentHouse', JSON.stringify(data))
      console.log(data)
    } catch (error) {
      dispatch({
        type: 'FAIL',
        message: 'something went wrong. please try again.',
      })
      console.log('error', error)
    }
  }

  return (
    <CreateHouseContainer>
      <p>
        <b>{inputValue}</b> does not exist yet. would you like to create the
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
