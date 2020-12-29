import React from 'react'

import { MovieListBackground } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import Posters from './Posters'

const MoviesList = () => {
  return (
    <MovieListBackground>
      <Marquee />
      <Posters />
    </MovieListBackground>
  )
}

export default MoviesList
