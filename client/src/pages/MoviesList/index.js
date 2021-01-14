import React, { useState, useEffect } from 'react'

import { MovieListBackground } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import Posters from './Posters'
import SelectedMovie from './SelectedMovie'
import TurnsTable from './TurnsTable'
import { useHouses } from '../../providers/Houses'
import { useTurns } from './utility'
import { ReelImage } from '../../styles/LoadingReel'

const MoviesList = () => {
  const [selectedMovie, setSelectedMovie] = useState()

  const { currentHouse } = useHouses()
  const { getHouseTurns, houseTurns } = useTurns()

  useEffect(() => {
    if (currentHouse && !houseTurns) {
      getHouseTurns(currentHouse.id)
    }
  }, [getHouseTurns, houseTurns, currentHouse])

  console.log('houseTurns', houseTurns)

  if (!currentHouse || !houseTurns) {
    return (
      <MovieListBackground>
        <ReelImage />
      </MovieListBackground>
    )
  }

  return (
    <MovieListBackground>
      <Marquee
        currentTurn={houseTurns.current_turn.username}
        nextTurn={houseTurns.next_turn.username}
      />
      {/* {!selectedMovie && <Posters setSelectedMovie={setSelectedMovie} />}
      {selectedMovie && <SelectedMovie selectedMovie={selectedMovie} />} */}
      <TurnsTable />
    </MovieListBackground>
  )
}

export default MoviesList
