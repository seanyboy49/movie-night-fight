import React, { useEffect } from 'react'

import { useHouses } from '../../providers/Houses'
import { useTurns } from '../../hooks/useTurns'
import { MovieListBackground } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import TurnTable from './TurnTable'
import { ReelImage } from '../../styles/LoadingReel'

const TurnsTable = () => {
  const { currentHouse, isLoading: isHousesLoading } = useHouses()
  const { getHouseTurns, houseTurns, isLoading: isTurnsLoading } = useTurns()

  const isLoading =
    isHousesLoading || isTurnsLoading || !currentHouse || !houseTurns

  useEffect(() => {
    if (currentHouse && !houseTurns) {
      getHouseTurns(currentHouse.id)
    }
  }, [getHouseTurns, houseTurns, currentHouse])

  if (isLoading) {
    return (
      <MovieListBackground>
        <Marquee currentTurn={'loading...'} nextTurn={'loading...'} />
        <ReelImage width="50" isActive={true} margin={'50px'} />
      </MovieListBackground>
    )
  }

  return (
    <MovieListBackground>
      <Marquee
        currentTurn={`${houseTurns.current_turn.username}'s`}
        nextTurn={
          houseTurns.next_turn
            ? houseTurns.next_turn.username
            : houseTurns.current_turn.username
        }
      />
      <TurnTable
        turnHistory={houseTurns.history}
        turnUser={houseTurns.current_turn.username}
      />
    </MovieListBackground>
  )
}

export default TurnsTable
