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
      <Add to="/">
        <img src={add} alt="add" width="20" />
      </Add>
      <AddRightCutout />
    </AddTicket>
  )
}

export default AddButton
