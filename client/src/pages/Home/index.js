import React from 'react'

import { Background } from '../../styles/Background'
import NavigationHeader from '../../components/NavigationHeader'
import Problem from './Problem'
import Solution1 from './Solution1'

const Home = () => {
  return (
    <Background>
      <h1>Home</h1>
      <Problem />
      <Solution1 />
    </Background>
  )
}

export default Home
