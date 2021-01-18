import React, { useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import PropTypes from 'prop-types'

import Poster from './Poster'
import {
  to,
  from,
  trans,
  useWatchMovie,
  useRemoveMovie,
  getXY,
} from './utility'
import { StackContainer } from './styled'
import useNuxSwipe from '../../hooks/useNuxSwipe'

const PosterStack = ({
  movies,
  onClick,
  onRelease,
  nuxStates,
  getUserSavedMovies,
  setSelectedMovie,
}) => {
  const { markMovieAsWatched } = useWatchMovie()
  const { removeMovie } = useRemoveMovie()

  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(movies.length, (i) => ({
    ...to(i),
    from: from(i),
  }))

  const { applyNUX, updateStorage } = useNuxSwipe()

  const bind = useDrag(
    ({
      args: [index],
      down: isDown,
      movement: [mx, my],
      distance,
      direction: [xDir, yDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2
      const dirX = xDir < 0 ? -1 : 1
      const dirY = yDir < 0 ? -1 : 1

      if (!isDown && trigger) gone.add(index)

      // Hanlde NUX interactions if they user should experience NUX
      applyNUX({
        onClick,
        isDown,
        nuxStates,
        xMovement: mx,
        yMovement: my,
        xDir: dirX,
        yDir: dirY,
      })

      // For updating local storage when user completes a NUX interaction
      updateStorage({
        onRelease,
        nuxStates,
        swipedCards: gone,
        cardIndex: index,
        xDir: dirX,
        yDir: dirY,
      })

      set((i) => {
        if (index !== i) return
        const isGone = gone.has(index)

        const [x, y] = getXY({ isGone, dirX, dirY, isDown, mx, my })
        const rot = mx / 100 + (isGone ? dirX * 10 * velocity : 0)
        const scale = isDown ? 1.1 : 1

        // if swipe right, user select movie and set to next user's turn
        const swipeThreshold = 150
        if (isGone && mx > swipeThreshold) {
          const movieSelected = movies[i]
          markMovieAsWatched(movieSelected, setSelectedMovie)
        }

        // delete movie on swipe downward
        const notLeftSwipe = mx * dirX < swipeThreshold
        if (isGone && my > swipeThreshold && notLeftSwipe) {
          const movieId = movies[i].id
          removeMovie(movieId)
        }

        return {
          x,
          y,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: isDown ? 800 : isGone ? 200 : 500 },
        }
      })

      // All cards from stack have been removed
      if (!isDown && gone.size === movies.length) {
        setTimeout(() => gone.clear() || set((i) => to(i)), 600)
        getUserSavedMovies()
      }
    }
  )

  return (
    <StackContainer>
      {props.map((springProps, i) => (
        <Poster
          key={i}
          i={i}
          springProps={springProps}
          trans={trans}
          movies={movies}
          bind={bind}
        />
      ))}
    </StackContainer>
  )
}

PosterStack.propTypes = {
  nuxStates: PropTypes.object,
  onLightBoxClick: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PosterStack
