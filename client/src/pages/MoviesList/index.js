import React, { useState, useEffect } from 'react'

import { MovieListBackground } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import Posters from './Posters'
import SelectedMovie from './SelectedMovie'
import TurnsTable from './TurnsTable'
import { useHouses } from '../../providers/Houses'
import { useTurns } from '../../hooks/useTurns'
import { ReelImage } from '../../styles/LoadingReel'

const MoviesList = () => {
  const [selectedMovie, setSelectedMovie] = useState()

  const { currentHouse, userId, isLoading: isHousesLoading } = useHouses()
  const { getHouseTurns, houseTurns, isLoading: isTurnsLoading } = useTurns()

  const isLoading =
    isHousesLoading || isTurnsLoading || !currentHouse || !houseTurns
  console.log('isLoading', isLoading)

  useEffect(() => {
    if (currentHouse && !houseTurns) {
      getHouseTurns(currentHouse.id)
    }
  }, [getHouseTurns, houseTurns, currentHouse])

  if (isLoading) {
    return (
      <MovieListBackground>
        <ReelImage />
      </MovieListBackground>
    )
  }

  if (userId !== houseTurns.current_turn.id) {
    return (
      <MovieListBackground>
        <Marquee
          currentTurn={houseTurns.current_turn.username}
          nextTurn={
            houseTurns.next_turn
              ? houseTurns.next_turn.username
              : houseTurns.current_turn.username
          }
        />
        <TurnsTable
          turnHistory={houseTurns.history}
          turnUser={houseTurns.current_turn.username}
        />
      </MovieListBackground>
    )
  }

  return (
    <MovieListBackground>
      <Marquee
        currentTurn={houseTurns.current_turn.username}
        nextTurn={
          houseTurns.next_turn
            ? houseTurns.next_turn.username
            : houseTurns.current_turn.username
        }
      />
      {!selectedMovie ? (
        <Posters setSelectedMovie={setSelectedMovie} />
      ) : (
        <SelectedMovie
          selectedMovie={selectedMovie}
          getHouseTurns={getHouseTurns}
          currentHouse={currentHouse}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </MovieListBackground>
  )
}

export default MoviesList
