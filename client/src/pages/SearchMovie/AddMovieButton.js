import React from 'react'

import { Ticket, LeftCutout, RightCutout } from '../../styles/Ticket'
import { AddButton } from './styled'
import { authFetch } from '../../auth'
import { useConfiguration } from '../../providers/Configuration'
import { useMovies } from '../../providers/Movies'

const AddMovieButton = ({ movie }) => {
  const { apiUrl } = useConfiguration()
  const { movies } = useMovies()

  function checkAddedMovies(title) {
    for (const movie of movies) {
      const movieTitle = movie.name
      if (movieTitle === title) {
        return true
      }
    }
    return false
  }

  async function addMovie(movie) {
    const body = {
      poster_url: movie.Poster,
      name: movie.Title,
      omdb_id: movie.imdbID,
    }
    try {
      const response = await authFetch(`${apiUrl}/watchlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Ticket width={'150'}>
      <LeftCutout />
      {checkAddedMovies(movie.Title) ? (
        <AddButton onClick={(e) => addMovie(movie)}>Remove</AddButton>
      ) : (
        <AddButton onClick={(e) => addMovie(movie)}>Add</AddButton>
      )}
      <RightCutout />
    </Ticket>
  )
}

export default AddMovieButton
