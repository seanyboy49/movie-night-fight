import React from 'react'

import { BebasText } from '../../styles/Text'
import { HousesComponentContainer } from './styled'
import { SearchBar, SearchInput, SearchImg } from '../../styles/SearchBar'

const HouseSearch = () => {
  return (
    <HousesComponentContainer>
      <BebasText size={'30px'}>Search for Houses or create one</BebasText>
      <SearchBar>
        <SearchImg />
        <SearchInput />
      </SearchBar>
    </HousesComponentContainer>
  )
}

export default HouseSearch
