import React from 'react'

import { BebasText } from '../../styles/Text'
import { Container, SlipImage } from './styled'

import Button from '../Button'

const Error = ({ textArray, onClick }) => {
  return (
    <Container>
      {textArray.map((text, i) => (
        <BebasText key={i} size="36px">
          {text}
        </BebasText>
      ))}
      <SlipImage />
      <Button text="Search Again" onSubmit={onClick} />
    </Container>
  )
}

export default Error
