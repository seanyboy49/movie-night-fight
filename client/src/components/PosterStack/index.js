import React, { useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import PropTypes from 'prop-types'

import Poster from './Poster'
import { to, from, trans } from './utility'
import { StackContainer } from './styled'
import useNuxSwipe from '../../hooks/useNuxSwipe'

const PosterStack = ({ movies, onClick, onRelease, nuxStates }) => {
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
      movement: [mx],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2
      const dir = xDir < 0 ? -1 : 1
      if (!isDown && trigger) gone.add(index)

      // Hanlde NUX interactions if they user should experience NUX
      applyNUX({
        onClick,
        isDown,
        nuxStates,
        xMovement: mx,
        xDir: dir,
      })

      // For updating local storage when user completes a NUX interaction
      updateStorage({
        onRelease,
        nuxStates,
        swipedCards: gone,
        cardIndex: index,
        xDir: dir,
      })

      set((i) => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : isDown ? mx : 0
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
        const scale = isDown ? 1.1 : 1

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: isDown ? 800 : isGone ? 200 : 500 },
        }
      })

      // All cards from stack have been removed
      if (!isDown && gone.size === movies.length) {
        setTimeout(() => gone.clear() || set((i) => to(i)), 600)
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
