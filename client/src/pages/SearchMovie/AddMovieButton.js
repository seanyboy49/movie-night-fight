import React from 'react'
import { useDispatch } from 'react-redux'

import { Ticket, LeftCutout, RightCutout } from '../../styles/Ticket'
import { AddButton } from './styled'
import { authFetch } from '../../auth'
import { useConfiguration } from '../../providers/Configuration'
import { useMovies } from '../../providers/Movies'
import { success, failure } from '../../state/actions'

function findMovieById(movies, movieOmdbId) {
  return movies.find((m) => m.omdb_id === movieOmdbId)
}

const AddMovieButton = ({ movie }) => {
  const { apiUrl } = useConfiguration()
  const { movies, getUserSavedMovies } = useMovies()
  const dispatch = useDispatch()

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
      dispatch(success(`Success! You have added ${movie.Title}`))
    } catch (error) {
      dispatch(failure('Something went wrong. Please try again.'))
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
      dispatch(success(`Success! You have removed ${movie.Title}`))
    } catch (error) {
      dispatch(failure('Something went wrong. Please try again.'))
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
