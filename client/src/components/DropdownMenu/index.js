import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from './styled'
import { SmallText, Divider } from '../../styles/Text'
import { logout } from '../../auth'

const DropdownMenu = ({ isOpen, background, color }) => {
  return (
    <Menu background={background} color={color} isOpen={isOpen}>
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
