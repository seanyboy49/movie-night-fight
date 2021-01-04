import React from 'react'

import { Ticket, LeftCutout, RightCutout } from '../../styles/Ticket'
import { AddButton } from './styled'
import { authFetch } from '../../auth'
import { useConfiguration } from '../../providers/Configuration'
import { useMovies } from '../../providers/Movies'

function findMovieById(movies, movieOmdbId) {
  return movies.find((m) => m.omdb_id === movieOmdbId)
}

const AddMovieButton = ({ movie }) => {
  const { apiUrl } = useConfiguration()
  const { movies, getUserSavedMovies } = useMovies()

  async function addMovie(movie) {
    const body = {
      poster_url: movie.Poster,
      name: movie.Title,
      omdb_id: movie.imdbID,
    }
    try {
      await authFetch(`${apiUrl}/watchlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      getUserSavedMovies()
      movie.isAdded = true
    } catch (error) {
      console.log('error', error)
    }
  }

  async function removeMovie(movieOmdbId) {
    const movieId = findMovieById(movies, movieOmdbId).id
    try {
      const response = await authFetch(`${apiUrl}/watchlist/${movieId}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        getUserSavedMovies()
        movie.isAdded = false
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Ticket width={'150'}>
      <LeftCutout />
      {movie.isAdded ? (
        <AddButton onClick={() => removeMovie(movie.imdbID)}>Remove</AddButton>
      ) : (
        <AddButton onClick={() => addMovie(movie)}>Add</AddButton>
      )}
      <RightCutout />
    </Ticket>
  )
}

export default AddMovieButton
