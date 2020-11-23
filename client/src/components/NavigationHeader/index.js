import React from 'react'
import styled from 'styled-components'

import Hamburger from '../Hamburger'

const NavHeader = styled.h1`
  font-family: bevan;
  font-size: 20px;
`

const NavigationHeader = () => {
  return (
    <>
      <NavHeader>Movie Night Fight</NavHeader>
      <Hamburger />
    </>
  )
}

export default NavigationHeader
