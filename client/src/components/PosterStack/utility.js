import { useDispatch } from 'react-redux'

import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import { useHouses } from '../../providers/Houses'

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
        dispatch({
          type: 'FAIL',
          message: data.message,
        })
      }
    } catch (error) {
      console.log('error', error)
    }
  }
  return { markMovieAsWatched }
}
