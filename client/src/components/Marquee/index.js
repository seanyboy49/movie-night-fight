import React from 'react'
import { MarqueeBackground, DotBorder, InfoContainer } from './styled'

const Marquee = () => {
  return (
    <MarqueeBackground>
      <DotBorder>
        <InfoContainer></InfoContainer>
      </DotBorder>
    </MarqueeBackground>
  )
}

export default Marquee
