import React from 'react'

import { Background } from '../../styles/Background'
import Problem from './Problem'
import Solution1 from './Solution1'
import Solution2 from './Solution2'
import Arrow from './Arrow'
import NavigationHeader from '../../components/NavigationHeader'
import Register from './Register'

const Home = () => {
  return (
    <Background>
      <NavigationHeader background="#D70808" color={'white'} />
      <Problem />
      <Arrow text={'yeah duhh!'} />
      <Solution1 />
      <Arrow text={'that was cool!'} />
      <Solution2 />
      <Arrow text={'sign me up'} />
      <Register />
    </Background>
  )
}

export default Home
