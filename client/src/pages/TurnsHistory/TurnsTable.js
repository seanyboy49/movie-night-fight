import React from 'react'

import {
  TurnsBoard,
  TurnsContainer,
  InfoContainer,
  Categories,
  TurnRow,
  User,
  Title,
  ScollContainer,
} from './styled'

const TurnsTable = ({ turnUser, turnsHistory }) => {
  const currentTurnPlaceholder = {
    user: turnUser,
    movie: '???',
  }
  const turnsCopy = [...turnsHistory, currentTurnPlaceholder]
  const ascendingTurns = turnsCopy.reverse()

  return (
    <TurnsContainer>
      <TurnsBoard>
        <InfoContainer>
          <Categories>
            <p>User</p>
            <p>Choice</p>
          </Categories>

          <ScollContainer>
            {ascendingTurns.map((turn, i) => {
              return (
                <TurnRow key={i}>
                  <User>{turn.user}</User>
                  <Title>{turn.movie}</Title>
                </TurnRow>
              )
            })}
          </ScollContainer>
        </InfoContainer>
      </TurnsBoard>
    </TurnsContainer>
  )
}

export default TurnsTable
