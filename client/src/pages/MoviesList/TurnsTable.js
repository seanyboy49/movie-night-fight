import React from 'react'

import { TurnsBoard, TurnsContainer, InfoContainer, Categories } from './styled'

const TurnsTable = () => {
  return (
    <TurnsContainer>
      <TurnsBoard>
        <InfoContainer>
          <Categories>
            <p>User</p>
            <p>Choice</p>
          </Categories>
        </InfoContainer>
      </TurnsBoard>
    </TurnsContainer>
  )
}

export default TurnsTable
