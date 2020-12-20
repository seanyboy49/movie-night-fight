import React from 'react'

import { SectionContainer, Text, Image, Header, TextContainer } from './styled'
import movieStack from '../../images/movie-stack.svg'

const Solution1 = () => {
  return (
    <SectionContainer id="solution1">
      <TextContainer>
        <Header>MOVIE NIGHT FIGHT</Header>
        <Text margin={'0 10%'}>
          curates your movie watch list for when it’s your turn to choose.
        </Text>
      </TextContainer>
      <Image src={movieStack} />
    </SectionContainer>
  )
}

export default Solution1
