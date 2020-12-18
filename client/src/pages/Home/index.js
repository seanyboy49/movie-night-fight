import React from 'react'
import { Link } from 'react-scroll'

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
      <Link
        activeClass="active"
        to="solution1"
        spy={true}
        smooth={true}
        offset={-20}
        duration={500}
      >
        <Arrow text={'yeah duhh!'} />
      </Link>
      <Solution1 />
      <Link
        activeClass="active"
        to="solution2"
        spy={true}
        smooth={true}
        offset={-20}
        duration={500}
      >
        <Arrow text={'that was cool!'} />
      </Link>
      <Solution2 />
      <Link
        activeClass="active"
        to="signUp"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Arrow text={'sign me up'} />
      </Link>
      <Register />
    </Background>
  )
}

export default Home
