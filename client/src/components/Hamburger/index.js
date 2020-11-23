import React from 'react'

import { StyledBurger } from './styled'

const Burger = ({ onClick, isOpen }) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => onClick(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
