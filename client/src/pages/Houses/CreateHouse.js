import React from 'react'

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
      console.log(data)
    } catch (error) {
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
