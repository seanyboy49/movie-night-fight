import React from 'react'

import {
  SectionContainer,
  Text,
  Header,
  TextContainer,
  HomePosterContainer,
} from './styled'
import { PosterContainer } from '../../styles/Background'
import PosterStack from '../../components/PosterStack'

const Solution1 = () => {
  return (
    <SectionContainer id="solution1">
      <TextContainer>
        <Header>MOVIE NIGHT FIGHT</Header>
        <Text margin={'0 10%'}>
          curates your movie watch list for when it’s your turn to choose.
        </Text>
      </TextContainer>
      <HomePosterContainer>
        <PosterContainer>
          <PosterStack />
        </PosterContainer>
      </HomePosterContainer>
    </SectionContainer>
  )
}

export default Solution1
