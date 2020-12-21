import React from 'react'
import {
  MarqueeBackground,
  DotBorder,
  InfoContainer,
  MarqueeSide,
  MarqueeCenter,
  Text,
} from './styled'

const Marquee = () => {
  return (
    <MarqueeBackground>
      <DotBorder>
        <InfoContainer>
          <MarqueeSide>
            <p>ticket</p>
          </MarqueeSide>
          <MarqueeCenter>
            <Text size={'24'}>Now Showing</Text>
            <Text size={'36'}>Sean's Choice</Text>
          </MarqueeCenter>
          <MarqueeSide border={'none'}>
            <Text size={'18'}>next up:</Text>
            <Text size={'24'}>Jina</Text>
          </MarqueeSide>
        </InfoContainer>
      </DotBorder>
    </MarqueeBackground>
  )
}

export default Marquee
