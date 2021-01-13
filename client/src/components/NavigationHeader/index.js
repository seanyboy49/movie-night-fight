import React, { useState } from 'react'

import DropdownMenu from '../DropdownMenu'
import Hamburger from '../Hamburger'
import { NavContainer, AppTitle, Nav } from './styled'
import BackArrow from './BackArrow'
import { useAuth } from '../../auth'

const NavigationHeader = ({ background, color, backLink }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [logged] = useAuth()

  const titleLink = logged ? '/' : '/public'

  return (
    <Nav>
      <NavContainer background={background}>
        <BackArrow backLink={backLink} />

        <AppTitle to={titleLink} color={color} onClick={() => setIsOpen(false)}>
          Movie Night Fight
        </AppTitle>

        <Hamburger color={color} onClick={setIsOpen} isOpen={isOpen} />
        <DropdownMenu
          isLogged={logged}
          background={background}
          color={color}
          isOpen={isOpen}
          toggleIsOpen={setIsOpen}
        />
      </NavContainer>
    </Nav>
  )
}

export default NavigationHeader
