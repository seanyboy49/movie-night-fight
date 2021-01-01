import React from 'react'

import { Ticket, LeftCutout, RightCutout } from '../../styles/Ticket'
import { AddButton } from './styled'

const AddMovieButton = () => {
  return (
    <Ticket width={'150'}>
      <LeftCutout />
      <AddButton>Add</AddButton>
      <RightCutout />
    </Ticket>
  )
}

export default AddMovieButton
