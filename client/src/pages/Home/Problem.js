import React from 'react'

import { SectionContainer, Text, Image } from './styled'
import fight from '../../images/fight.svg'

const Problem = () => {
  return (
    <SectionContainer>
      <Text>do you and your house mates fight over which movie to watch?</Text>
      <Image src={fight} alt="fight" />
    </SectionContainer>
  )
}

export default Problem
