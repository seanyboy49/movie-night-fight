import React from 'react'

import { MovieListBackground } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import PosterStack from '../../components/PosterStack'

const MoviesList = () => {
  return (
    <MovieListBackground>
      <Marquee />
      <PosterStack />
    </MovieListBackground>
  )
}

export default MoviesList
