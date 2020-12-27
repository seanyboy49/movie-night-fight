import React from 'react'

import add from '../../images/add.svg'
import { AddTicket, Add } from './styled'
import { LeftCutout, RightCutout } from '../../styles/Ticket'

const AddButton = () => {
  return (
    <AddTicket>
      <LeftCutout height={'18'} />
      <Add to="/">
        <img src={add} alt="add" width="20" />
      </Add>
      <RightCutout height={'18'} />
    </AddTicket>
  )
}

export default AddButton
