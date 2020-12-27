import React from 'react'

import {
  Ticket,
  Content,
  AddLeftCutout,
  AddRightCutout,
} from '../../styles/Ticket'

const TicketLink = ({ text, toLink }) => {
  return (
    <Ticket>
      <AddLeftCutout />
      <Content to={toLink}>{text}</Content>
      <AddRightCutout />
    </Ticket>
  )
}

export default TicketLink
