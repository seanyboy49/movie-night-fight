import React from 'react'

import { Background } from '../../styles/Background'
import { Image } from './styled'
import Problem from './Problem'
import Solution1 from './Solution1'
import Solution2 from './Solution2'
import Arrow from './Arrow'

const Home = () => {
  return (
    <Background>
      <h1>Home</h1>
      <Problem />
      <Arrow text={'yeah duhh!'} />
      <Solution1 />
      <Arrow text={'that was cool!'} />
      <Solution2 />
      <Arrow text={'sign me up'} />
    </Background>
  )
}

export default Home
