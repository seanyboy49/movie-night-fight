import React from 'react'
import { animated, interpolate } from 'react-spring'

const Poster = ({ i, x, y, rot, scale, trans, bind, cards }) => {
  const card = cards[i]

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          backgroundImage: `url(${card})`,
        }}
      />
    </animated.div>
  )
}

export default Poster
