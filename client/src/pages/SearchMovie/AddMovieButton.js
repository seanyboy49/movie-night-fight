import React from 'react'

import { Ticket, LeftCutout, RightCutout } from '../../styles/Ticket'
import { AddButton } from './styled'

const AddMovieButton = ({ addMovie, movie }) => {
  return (
    <Ticket width={'150'}>
      <LeftCutout />
      <AddButton onClick={(e) => addMovie(movie)}>Add</AddButton>
      <RightCutout />
    </Ticket>
  )
}

export default AddMovieButton
