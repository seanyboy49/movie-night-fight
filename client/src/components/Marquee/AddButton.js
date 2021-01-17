import React from 'react'

import add from '../../images/add.svg'
import { AddTicket, Add } from './styled'
import { LeftCutout, RightCutout } from '../../styles/Ticket'
import routes from '../../routes'

const { searchMovies } = routes.app

const AddButton = () => {
  return (
    <AddTicket>
      <LeftCutout height={'18'} />
      <Add to={searchMovies}>
        <img src={add} alt="add" width="20" />
      </Add>
      <RightCutout height={'18'} />
    </AddTicket>
  )
}

export default AddButton
