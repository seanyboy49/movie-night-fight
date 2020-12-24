import React from 'react'

import { MovieListBackground, PosterContainer } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import PosterStack from '../../components/PosterStack'

const MoviesList = () => {
  return (
    <MovieListBackground>
      <Marquee />
      <PosterContainer>
        <PosterStack />
      </PosterContainer>
    </MovieListBackground>
  )
}

export default MoviesList
