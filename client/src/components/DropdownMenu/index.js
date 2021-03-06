import React from 'react'
import PropTypes from 'prop-types'

import { Menu, NavLink } from './styled'
import { SmallText, Divider } from '../../styles/Text'
import { logout } from '../../auth'
import routes from '../../routes'

const { login, signup } = routes.public
const { moviesList, houses, searchMovies, turnsHistory } = routes.app

const loggedOutLinks = [
  {
    text: 'Log In',
    to: login,
  },
  {
    text: 'Sign Up',
    to: signup,
  },
]

const loggedInLinks = [
  {
    text: 'Movies list',
    to: moviesList,
  },
  {
    text: 'Search movies',
    to: searchMovies,
  },
  {
    text: 'View past choices',
    to: turnsHistory,
  },
  {
    text: 'Switch houses',
    to: houses,
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
            <React.Fragment key={i}>
              <SmallText onClick={() => toggleIsOpen(!isOpen)}>
                <NavLink to={link.to}>{link.text}</NavLink>
              </SmallText>
              {notLast && <Divider />}
            </React.Fragment>
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
          <React.Fragment key={i}>
            <SmallText>
              <NavLink
                color="black"
                to={to || ''}
                onClick={() => {
                  onClick && onClick()
                  toggleIsOpen(!isOpen)
                }}
              >
                {text}
              </NavLink>
            </SmallText>
            {notLast && <Divider />}
          </React.Fragment>
        )
      })}
    </Menu>
  )
}

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
}

export default DropdownMenu
