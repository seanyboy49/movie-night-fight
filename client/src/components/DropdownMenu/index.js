import React from 'react'
import PropTypes from 'prop-types'

import { Menu, NavLink } from './styled'
import { SmallText, Divider } from '../../styles/Text'
import { logout } from '../../auth'

const loggedOutLinks = [
  {
    text: 'Log In',
    to: '/login',
  },
  {
    text: 'Sign Up',
    to: '/signup',
  },
]

const loggedInLinks = [
  {
    text: 'Movies list',
    to: '/movies-list',
  },
  {
    text: 'View past choices',
    to: '/movies-list', // TODO: replace
  },
  {
    text: 'Switch houses',
    to: '/houses',
  },
  {
    text: 'Search movies',
    to: '/search-movies',
  },
  {
    text: 'Log out',
    onClick: logout,
  },
]

const DropdownMenu = ({
  isOpen,
  isLogged,
  background,
  color,
  toggleIsOpen,
}) => {
  if (!isLogged) {
    return (
      <Menu
        background={background}
        color={color}
        isOpen={isOpen}
        onClick={() => toggleIsOpen(!isOpen)}
      >
        {loggedOutLinks.map((link, i) => {
          const notLast = i !== loggedOutLinks.length - 1

          return (
            <>
              <SmallText onClick={() => toggleIsOpen(!isOpen)}>
                <NavLink to={link.to}>{link.text}</NavLink>
              </SmallText>
              {notLast && <Divider />}
            </>
          )
        })}
      </Menu>
    )
  }

  return (
    <Menu isOpen={isOpen} onClick={() => toggleIsOpen(!isOpen)}>
      {loggedInLinks.map((link, i) => {
        const notLast = i !== loggedInLinks.length - 1

        const { text, to, onClick } = link
        return (
          <>
            <SmallText>
              <NavLink
                color="black"
                to={to}
                onClick={() => {
                  onClick && onClick()
                  toggleIsOpen(!isOpen)
                }}
              >
                {text}
              </NavLink>
            </SmallText>
            {notLast && <Divider />}
          </>
        )
      })}
    </Menu>
  )
}

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default DropdownMenu
