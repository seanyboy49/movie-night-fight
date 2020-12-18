import React from 'react'

import arrow from '../../images/arrow.svg'
import { MediumText, ArrowContainer } from './styled'

const Arrow = ({ text }) => {
  return (
    <ArrowContainer>
      <MediumText>{text}</MediumText>
      <img src={arrow} alt="arrow" />
    </ArrowContainer>
  )
}

export default Arrow
