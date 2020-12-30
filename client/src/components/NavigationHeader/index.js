import React, { useState } from 'react'
import DropdownMenu from '../DropdownMenu'

import Hamburger from '../Hamburger'
import { NavContainer, AppTitle, Nav } from './styled'

const NavigationHeader = ({ background, color }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <NavContainer background={background}>
        <AppTitle color={color}>Movie Night Fight</AppTitle>
        <Hamburger color={color} onClick={setIsOpen} isOpen={isOpen} />
        <DropdownMenu
          background={background}
          color={color}
          isOpen={isOpen}
          onClick={setIsOpen}
        />
      </NavContainer>
    </Nav>
  )
}

export default NavigationHeader
