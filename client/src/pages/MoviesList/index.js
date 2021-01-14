import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { MovieListBackground } from '../../styles/Background'
import Marquee from '../../components/Marquee'
import Posters from './Posters'
import SelectedMovie from './SelectedMovie'
import { success, failure } from '../../state/actions'

const MoviesList = () => {
  const [selectedMovie, setSelectedMovie] = useState()
  const dispatch = useDispatch()
  return (
    <MovieListBackground>
      <button onClick={() => dispatch(success('Everything is awesome!'))}>
        success
      </button>
      <button onClick={() => dispatch(failure('Putain de merde!'))}>
        failure
      </button>
      <Marquee />
      {!selectedMovie && <Posters setSelectedMovie={setSelectedMovie} />}
      {selectedMovie && <SelectedMovie selectedMovie={selectedMovie} />}
    </MovieListBackground>
  )
}

export default MoviesList
