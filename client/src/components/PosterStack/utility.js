import { useDispatch } from 'react-redux'

import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import { useHouses } from '../../providers/Houses'
import { success, failure } from '../../state/actions'

/**
 * utility function that returns the ending coordinates of where a card animates to
 *
 * @param {Number} i - index
 */
export const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})

/**
 * utility function that returns the starting coordinates of where a card animates from
 *
 * @param {Number} i - index
 */
export const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

/**
 *
 * @param {*} r - rotational degrees
 * @param {*} s - scale value
 */
export const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

/**
 * Returns x and y in an array. Ensures that if a user swipes in a direction, the
 * card will travel in that direction.
 *
 * @param {Boolean} isGone
 * @param {Boolean} isDown
 * @param {Number} dirX - the x direction. -1 is left and 1 is right
 * @param {Number} dirY - the y direction. -1 is down and 1 is up
 * @param {Number} dirY - the y direction. -1 is down and 1 is up
 * @param {Number} mx - x offset from center
 * @param {Number} my - y offset from center
 */
export function getXY({ isGone, isDown, dirX, dirY, mx, my }) {
  const pointOffScreen = 200 + window.innerWidth
  // horizontal swipes
  if (isGone && Math.abs(mx) > 150) {
    return [pointOffScreen * dirX, my]
  }
  // vertical swipes
  if (isGone && Math.abs(my) > 150) {
    return [mx, pointOffScreen * dirY]
  }

  if (isDown) {
    return [mx, my]
  }
  return [0, 0]
}

export const useWatchMovie = () => {
  const { apiUrl } = useConfiguration()
  const { currentHouse } = useHouses()
  const dispatch = useDispatch()

  async function markMovieAsWatched(movieSelected, onSuccess) {
    const currentHouseId = currentHouse.id
    const currentMovieId = movieSelected.id
    try {
      const response = await authFetch(
        `${apiUrl}/watchlist?movieId=${currentMovieId}&houseId=${currentHouseId}`,
        {
          method: 'PATCH',
        }
      )
      if (response.status === 201) {
        onSuccess(movieSelected)
      } else {
        const data = await response.json()
        dispatch(failure(data.message))
      }
    } catch (error) {
      console.log('error', error)
    }
  }
  return { markMovieAsWatched }
}

export const useRemoveMovie = () => {
  const { apiUrl } = useConfiguration()
  const dispatch = useDispatch()

  async function removeMovie(movieId) {
    try {
      await authFetch(`${apiUrl}/watchlist/${movieId}`, {
        method: 'DELETE',
      })
      dispatch(success('Movie has been successfully removed.'))
    } catch (error) {
      dispatch(failure('Unable to remove movie, please try again.'))
    }
  }
  return { removeMovie }
}
