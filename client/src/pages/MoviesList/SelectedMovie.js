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
  const FadeInRef = useRef()

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    // delay: 1500,
    config: { duration: 1500 },
    ref: FadeInRef,
  })

  const moveInRef = useRef()

  const moveIn = useSpring({
    from: { transform: 'translateX(350%) rotate(100deg)' },
    to: { transform: 'translateX(0%) rotate(0)' },
    // config: { duration: 2000 },
    config: { tension: 300, mass: 1.5, fraction: 50 },
    ref: moveInRef,
  })

  useChain([moveInRef, FadeInRef], [0, 3])

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
      <SuccessBanner />
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
