import React, { useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import PropTypes from 'prop-types'

import Poster from './Poster'
import { to, from, trans } from './utility'
import { StackContainer } from './styled'
import { categories as lightBoxCategories } from '../LightBox'

const PosterStack = ({
  movies,
  onLightBoxClick,
  onLightBoxClickComplete,
  nuxStates,
}) => {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(movies.length, (i) => ({
    ...to(i),
    from: from(i),
  }))
  const { isSwipeLeftComplete, isSwipeRightComplete } = nuxStates

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2
      const dir = xDir < 0 ? -1 : 1
      if (!down && trigger) gone.add(index)

      if (onLightBoxClick && Math.abs(mx) >= 20) {
        if (down) {
          if (!isSwipeRightComplete && dir === 1) {
            onLightBoxClick(lightBoxCategories.nuxSwipeRight)
            if (gone.has(index)) {
              console.log('gone left!')
            }
          } else if (!isSwipeLeftComplete && dir === -1) {
            onLightBoxClick(lightBoxCategories.nuxSwipeLeft)
          }
        } else {
          onLightBoxClick(undefined)
        }
      }

      if (gone.has(index)) {
        if (dir === 1) {
          console.log('gone right!')
          if (!isSwipeRightComplete) {
            onLightBoxClickComplete('isSwipeRightComplete', true)
          }
        } else if (dir === -1) {
          console.log('gone left!')
          if (!isSwipeLeftComplete) {
            onLightBoxClickComplete('isSwipeLeftComplete', true)
          }
        }
      }

      set((i) => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
        const scale = down ? 1.1 : 1

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })

      // All cards from stack have been removed
      if (!down && gone.size === movies.length) {
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
