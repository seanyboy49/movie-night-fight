import React from 'react'

import confused from '../../images/confused.svg'
import { NoHousesContainer, Img } from './styled'
import { BebasText } from '../../styles/Text'

const NoHouses = () => {
  return (
    <NoHousesContainer>
      <BebasText size={'30px'}>You haven't jouned any houses yet...</BebasText>
      <Img src={confused} alt="doesn't exist" />
    </NoHousesContainer>
  )
}

export default NoHouses
