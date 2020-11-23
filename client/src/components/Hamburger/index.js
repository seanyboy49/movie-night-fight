import React, { useState } from 'react'
import { StyledBurger } from './styled'

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
