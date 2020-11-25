import React, { useState } from 'react'
import {
  ButtonContainer,
  LeftCutout,
  RightCutout,
  TicketButton,
  ReelImage,
} from './styled'
import reel from '../../images/film-reel.svg'

const Button = ({ text, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <ButtonContainer>
      <LeftCutout></LeftCutout>
      {!isLoading && <TicketButton onClick={onSubmit}>{text}</TicketButton>}
      {isLoading && (
        <TicketButton padding={'5px 30px 0px 30px'}>
          <ReelImage src={reel} />
        </TicketButton>
      )}
      <RightCutout></RightCutout>
    </ButtonContainer>
  )
}

export default Button
