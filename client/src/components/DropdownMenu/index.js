import React from 'react'
import PropTypes from 'prop-types'

import { Menu, NavLink } from './styled'
import { SmallText, Divider } from '../../styles/Text'
import { logout, useAuth } from '../../auth'

const DropdownMenu = ({ isOpen, background, color }) => {
  const [logged] = useAuth()

  if (!logged) {
    return (
      <Menu background={background} color={color} isOpen={isOpen}>
        <SmallText>
          <NavLink to="/login">Log In</NavLink>
        </SmallText>
        <Divider />
        <SmallText>
          <NavLink to="/signup">Sign Up</NavLink>
        </SmallText>
      </Menu>
    )
  }

  return (
    <Menu isOpen={isOpen}>
      <SmallText>View past choices</SmallText>
      <Divider />
      <SmallText>Switch houses</SmallText>
      <Divider />
      <SmallText test-attr="logout-button" onClick={logout}>
        Log out
      </SmallText>
    </Menu>
  )
}

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default DropdownMenu
