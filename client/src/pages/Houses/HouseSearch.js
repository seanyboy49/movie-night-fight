import React from 'react'

import { BebasText } from '../../styles/Text'
import { HousesComponentContainer, SearchBar, SearchInput } from './styled'
import search from '../../images/search.svg'

const HouseSearch = () => {
  return (
    <HousesComponentContainer>
      <BebasText size={'30px'}>Search for Houses or create one</BebasText>
      <SearchBar>
        <img src={search} alt="search" />
        <SearchInput />
      </SearchBar>
    </HousesComponentContainer>
  )
}

export default HouseSearch
