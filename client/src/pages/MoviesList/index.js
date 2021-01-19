import React, { useState, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'

import { MovieListBackground } from '../../styles/Background'
import { NoHouseContainer } from './styled'
import Marquee from '../../components/Marquee'
import Posters from './Posters'
import SelectedMovie from './SelectedMovie'
import { useHouses } from '../../providers/Houses'
import { useTurns } from '../../hooks/useTurns'
import { ReelImage } from '../../styles/LoadingReel'
import routes from '../../routes'
import NoMoviesOrHouse from './NoMoviesOrHouse'

const { turnHistory, houses } = routes.app
const movie = {
  id: 36,
  name: 'Shakespeare in Love',
  omdb_id: 'tt0138097',
  poster_url:
    'https://m.media-amazon.com/images/M/MV5BM2ZkNjM5Mj…zhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
}

const MoviesList = () => {
  const [selectedMovie, setSelectedMovie] = useState(movie)

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

  if (!currentHouse && !isHousesLoading) {
    return (
      <MovieListBackground>
        <Marquee currentTurn={'loading...'} nextTurn={'loading...'} />
        <NoHouseContainer>
          <NoMoviesOrHouse text={['join', 'houses']} redirectTo={houses} />
        </NoHouseContainer>
      </MovieListBackground>
    )
  }

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
