import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  ButtonContainer,
  LeftCutout,
  RightCutout,
  TicketButton,
  ReelImage,
} from './styled'
import reel from '../../images/film-reel.svg'

const Button = ({ text, onSubmit, isLoading, isDisabled }) => {
  return (
    <ButtonContainer>
      <LeftCutout />
      {isLoading ? (
        <TicketButton padding={'5px 30px 0px 30px'}>
          <ReelImage src={reel} />
        </TicketButton>
      ) : (
        <TicketButton onClick={onSubmit} disabled={isDisabled}>
          {text}
        </TicketButton>
      )}
      <RightCutout />
    </ButtonContainer>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
}

export default Button
