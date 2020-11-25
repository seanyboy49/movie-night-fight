import React from 'react'
import {
  ButtonContainer,
  LeftCutout,
  RightCutout,
  TicketButton,
} from './styled'

const Button = ({ text, onSubmit }) => {
  return (
    <ButtonContainer>
      <LeftCutout></LeftCutout>
      <TicketButton onClick={onSubmit}>{text}</TicketButton>
      <RightCutout></RightCutout>
    </ButtonContainer>
  )
}

export default Button
