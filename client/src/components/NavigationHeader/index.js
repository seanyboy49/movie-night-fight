import React from 'react'
import styled from 'styled-components'

import Hamburger from '../Hamburger'

const AppTitle = styled.h1`
  font-family: bevan;
  font-size: 20px;
`

const NavContainer = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;

  > * {
    margin-left: auto;
  }
`

const NavigationHeader = () => {
  return (
    <NavContainer>
      <AppTitle>Movie Night Fight</AppTitle>

      <Hamburger />
    </NavContainer>
  )
}

export default NavigationHeader
