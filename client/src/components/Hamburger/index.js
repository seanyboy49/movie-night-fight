import React from 'react'
import PropTypes from 'prop-types'

import { StyledBurger } from './styled'

const Burger = ({ onClick, isOpen, color }) => {
  return (
    <StyledBurger
      color={color}
      isOpen={isOpen}
      onClick={() => onClick(!isOpen)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Burger
