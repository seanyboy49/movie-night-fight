import React from 'react'

import add from '../../images/add.svg'
import {
  AddTicket,
  Add,
  AddImage,
  AddLeftCutout,
  AddRightCutout,
} from './styled'

const AddButton = () => {
  return (
    <AddTicket>
      <AddLeftCutout />
      <Add>
        <AddImage src={add} alt="add" />
      </Add>
      <AddRightCutout />
    </AddTicket>
  )
}

export default AddButton
