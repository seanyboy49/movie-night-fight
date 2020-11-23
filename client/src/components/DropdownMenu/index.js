import React from 'react'

import { Menu } from './styled'
import { SmallText } from '../../styles/Text'

const DropdownMenu = ({ isOpen }) => {
  return (
    <Menu isOpen={isOpen}>
      <ul>
        <SmallText>View past choices</SmallText>
        <SmallText>Switch houses</SmallText>
        <SmallText>Log out</SmallText>
      </ul>
    </Menu>
  )
}

export default DropdownMenu
