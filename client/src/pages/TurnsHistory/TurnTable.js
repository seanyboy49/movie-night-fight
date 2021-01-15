import React from 'react'

import {
  TurnsBoard,
  TurnsContainer,
  InfoContainer,
  Categories,
  Turn,
  User,
  Title,
} from './styled'

const TurnTable = ({ turnUser, turnHistory }) => {
  const turnsCopy = [...turnHistory]
  const ascendingTurns = turnsCopy.reverse()

  return (
    <TurnsContainer>
      <TurnsBoard>
        <InfoContainer>
          <Categories>
            <p>User</p>
            <p>Choice</p>
          </Categories>
          <Turn>
            <User>{turnUser}</User>
            <Title>???</Title>
          </Turn>
          {ascendingTurns.map((turn) => {
            return (
              <Turn key={turn.created_at}>
                <User>{turn.user}</User>
                <Title>{turn.movie}</Title>
              </Turn>
            )
          })}
        </InfoContainer>
      </TurnsBoard>
    </TurnsContainer>
  )
}

export default TurnTable
