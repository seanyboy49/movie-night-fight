import React from 'react'

import { HousesComponentContainer, ConfusedPersonImg } from './styled'
import { BebasText } from '../../styles/Text'

const NoHouses = () => {
  return (
    <HousesComponentContainer>
      <BebasText size={'30px'}>You haven't jouned any houses yet...</BebasText>
      <ConfusedPersonImg />
    </HousesComponentContainer>
  )
}

export default NoHouses
