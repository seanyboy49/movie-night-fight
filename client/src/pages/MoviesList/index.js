import React, { useState, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'

import { MovieListBackground } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import Posters from './Posters'
import SelectedMovie from './SelectedMovie'
import { useHouses } from '../../providers/Houses'
import { useTurns } from '../../hooks/useTurns'
import { ReelImage } from '../../styles/LoadingReel'
import routes from '../../routes'

const { turnHistory } = routes.app

const MoviesList = () => {
  const [selectedMovie, setSelectedMovie] = useState()

  const { currentHouse, userId, isLoading: isHousesLoading } = useHouses()
  const { getHouseTurns, houseTurns, isLoading: isTurnsLoading } = useTurns()
  const history = useHistory()

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

  if (userId !== houseTurns.current_turn.id) {
    return <Redirect to={turnHistory} />
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

      {!selectedMovie ? (
        <Posters setSelectedMovie={setSelectedMovie} />
      ) : (
        <SelectedMovie
          turnHistory={turnHistory}
          history={history}
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
