import React, { useRef } from 'react'
import { useSpring, animated, useChain } from 'react-spring'

import {
  SelectedMovieContainer,
  MovieDetailContainer,
  MovieTitle,
  SuccessBanner,
  // ButtonContainer,
} from './styled'
import {
  Ticket,
  LeftCutout,
  RightCutout,
  TicketButton,
} from '../../styles/Ticket'
import { useMovies } from '../../providers/Movies'

const SelectedMovie = ({
  selectedMovie,
  getHouseTurns,
  currentHouse,
  setSelectedMovie,
}) => {
  const { getUserSavedMovies } = useMovies()
  const fadeInRef = useRef()

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
    ref: fadeInRef,
  })

  const moveInRef = useRef()

  const moveIn = useSpring({
    from: { transform: 'translateX(350%) rotate(100deg)' },
    to: { transform: 'translateX(0%) rotate(0)' },
    config: { tension: 300, mass: 1.5 },
    ref: moveInRef,
  })

  // need to store reference to current ref because we are running the chain on mount
  // See this article for explanation: https://stackoverflow.com/questions/61149605/how-to-execute-two-animations-sequentially-using-react-spring
  const moveInCurrent = !moveInRef.current
    ? moveInRef
    : { current: moveInRef.current }

  useChain([moveInCurrent, fadeInRef], [0, 1])

  function onSubmit() {
    getHouseTurns(currentHouse.id)
    setSelectedMovie(undefined)
    getUserSavedMovies()
  }
  return (
    <SelectedMovieContainer>
      <animated.div style={moveIn}>
        <MovieDetailContainer>
          <img src={selectedMovie.poster_url} alt="movie poster" height="350" />
          <MovieTitle>{selectedMovie.name}</MovieTitle>
        </MovieDetailContainer>
      </animated.div>
      <SuccessBanner style={fadeIn} />
      <animated.div style={fadeIn}>
        <Ticket width={'150'}>
          <LeftCutout color={'#FFECB4'} />
          <TicketButton padding={'5px 25px'} onClick={onSubmit}>
            Cool
          </TicketButton>
          <RightCutout color={'#FFECB4'} />
        </Ticket>
      </animated.div>
    </SelectedMovieContainer>
  )
}

export default SelectedMovie
