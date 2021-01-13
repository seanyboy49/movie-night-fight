import React, { useState } from 'react'

import { MovieListBackground } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import Posters from './Posters'
import SelectedMovie from './SelectedMovie'

const mockMovie = {
  id: 2,
  name: 'Star Wars: Episode V - The Empire Strikes Back',
  omdb_id: 'tt0080684',
  poster_url:
    'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
}

const MoviesList = () => {
  const [isSelected, setIsSelected] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState(mockMovie)

  return (
    <MovieListBackground>
      <Marquee />
      {!isSelected && <Posters setSelectedMovie={setSelectedMovie} />}
      {isSelected && <SelectedMovie selectedMovie={selectedMovie} />}
    </MovieListBackground>
  )
}

export default MoviesList
