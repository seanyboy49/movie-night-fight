import React from 'react'
import PropTypes from 'prop-types'

import { Menu, NavLink } from './styled'
import { SmallText, Divider } from '../../styles/Text'
import { logout, useAuth } from '../../auth'

const DropdownMenu = ({ isOpen, background, color, onClick }) => {
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
    <Menu isOpen={isOpen} onClick={() => onClick(!isOpen)}>
      <SmallText>
        <NavLink color={'black'} to="/movies-list">
          Movies list
        </NavLink>
      </SmallText>
      <Divider />
      <SmallText>View past choices</SmallText>
      <Divider />
      <SmallText>
        <NavLink color={'black'} to="/houses">
          Switch houses
        </NavLink>
      </SmallText>
      <Divider />
      <SmallText>
        <NavLink color={'black'} to="/search-movies">
          Search movies
        </NavLink>
      </SmallText>
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
