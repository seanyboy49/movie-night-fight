import React, { useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

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
  const isPhoneWide = useMediaQuery({
    query: `(max-width: 600px)`,
  })
  const isNotDemo = Boolean(
    onClick && onRelease && nuxStates && getUserSavedMovies && setSelectedMovie
  )

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
      const swipeThreshold = isPhoneWide ? 20 : 150

      if (!isDown && trigger) gone.add(index)
      const isGone = gone.has(index)

      if (isNotDemo) {
        // Handle NUX interactions if the user is eligible for NUX
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

        // If swipe right, user select movie and set to next user's turn
        if (isGone && mx > swipeThreshold) {
          const movieSelected = movies[index]
          // Let the animation finish before marking as watched
          setTimeout(
            () => markMovieAsWatched(movieSelected, setSelectedMovie),
            600
          )
        }

        // If swipe down, delete movie from watch list
        const notLeftSwipe = mx * dirX < swipeThreshold
        if (isGone && my > swipeThreshold && notLeftSwipe) {
          const movieId = movies[index].id
          removeMovie(movieId)
        }
      }

      // For updating the new animation props of each card
      set((i) => {
        if (index !== i) return

        const [x, y] = getXY({
          isGone,
          dirX,
          dirY,
          isDown,
          mx,
          my,
          swipeThreshold,
        })
        const rot = mx / 100 + (isGone ? dirX * 10 * velocity : 0)
        const scale = isDown ? 1.1 : 1

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

        isNotDemo && getUserSavedMovies()
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
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func,
  onRelease: PropTypes.func,
  nuxStates: PropTypes.object,
  getUserSavedMovies: PropTypes.func,
  setSelectedMovie: PropTypes.func,
}

export default PosterStack
