import React, { useState } from 'react'

import { MovieListBackground } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import Posters from './Posters'
import SelectedMovie from './SelectedMovie'

const MoviesList = () => {
  const [selectedMovie, setSelectedMovie] = useState()

  return (
    <MovieListBackground>
      <Marquee />
      {!selectedMovie && <Posters setSelectedMovie={setSelectedMovie} />}
      {selectedMovie && <SelectedMovie selectedMovie={selectedMovie} />}
    </MovieListBackground>
  )
}

export default MoviesList
