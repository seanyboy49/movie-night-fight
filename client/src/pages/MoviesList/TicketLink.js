import React from 'react'

import { Ticket, Content, LeftCutout, RightCutout } from '../../styles/Ticket'

const TicketLink = ({ text, toLink }) => {
  return (
    <Ticket>
      <LeftCutout />
      <Content to={toLink}>{text}</Content>
      <RightCutout />
    </Ticket>
  )
}

export default TicketLink
