import React, { useState } from 'react'
import DropdownMenu from '../DropdownMenu'

import Hamburger from '../Hamburger'
import { NavContainer, AppTitle } from './styled'

const NavigationHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <NavContainer>
        <AppTitle>Movie Night Fight</AppTitle>

        <Hamburger onClick={setIsOpen} isOpen={isOpen} />
      </NavContainer>
      <DropdownMenu isOpen={isOpen} />
    </>
  )
}

export default NavigationHeader
