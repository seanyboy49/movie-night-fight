import React from 'react'

import confused from '../../images/confused.svg'
import { HousesComponentContainer, Img } from './styled'
import { BebasText } from '../../styles/Text'

const NoHouses = () => {
  return (
    <HousesComponentContainer>
      <BebasText size={'30px'}>You haven't jouned any houses yet...</BebasText>
      <Img src={confused} alt="doesn't exist" />
    </HousesComponentContainer>
  )
}

export default NoHouses
