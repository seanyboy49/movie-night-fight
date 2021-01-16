import React from 'react'

import {
  MarqueeBackground,
  DotBorder,
  InfoContainer,
  MarqueeSide,
  MarqueeCenter,
  Text,
} from './styled'
import AddButton from './AddButton'

const Marquee = ({ currentTurn, nextTurn }) => {
  return (
    <MarqueeBackground>
      <DotBorder>
        <InfoContainer>
          <MarqueeSide>
            <AddButton />
          </MarqueeSide>
          <MarqueeCenter>
            <Text size={'24'} mediaSize={'18'}>
              Now Showing
            </Text>
            <Text size={'36'} mediaSize={'28'}>
              {currentTurn} Choice
            </Text>
          </MarqueeCenter>
          <MarqueeSide border={'none'}>
            <Text size={'18'} mediaSize={'18'}>
              next up:
            </Text>
            <Text size={'24'} mediaSize={'28'}>
              {nextTurn}
            </Text>
          </MarqueeSide>
        </InfoContainer>
      </DotBorder>
    </MarqueeBackground>
  )
}

export default Marquee
