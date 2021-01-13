import React from 'react'

import {
  SelectedMovieContainer,
  MovieDetailContainer,
  MovieTitle,
} from './styled'
import {
  Ticket,
  LeftCutout,
  RightCutout,
  TicketButton,
} from '../../styles/Ticket'

const SelectedMovie = ({ selectedMovie }) => {
  return (
    <SelectedMovieContainer>
      <MovieDetailContainer>
        <img src={selectedMovie.poster_url} alt="movie poster" height="350" />
        <MovieTitle>{selectedMovie.name}</MovieTitle>
      </MovieDetailContainer>
      <Ticket width={'150'}>
        <LeftCutout color={'#FFECB4'} />
        <TicketButton padding={'5px 25px'}>Cool</TicketButton>
        <RightCutout color={'#FFECB4'} />
      </Ticket>
    </SelectedMovieContainer>
  )
}

export default SelectedMovie
