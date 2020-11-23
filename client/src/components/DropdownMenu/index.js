import React from 'react'

import { Menu } from './styled'
import { SmallText, Divider } from '../../styles/Text'

const DropdownMenu = ({ isOpen }) => {
  return (
    <Menu isOpen={isOpen}>
      <SmallText>View past choices</SmallText>
      <Divider />
      <SmallText>Switch houses</SmallText>
      <Divider />
      <SmallText>Log out</SmallText>
    </Menu>
  )
}

export default DropdownMenu
