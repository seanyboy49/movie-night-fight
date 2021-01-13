export const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})

export const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

export const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

export const removeMovie = async (removeMovieOmdbId, authFetch, apiUrl) => {
  try {
    await authFetch(`${apiUrl}/watchlist/${removeMovieOmdbId}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.log('error', error)
  }

  // fetch request to remove movie from user db
  // when stack finish, function to get updated movie list
}
