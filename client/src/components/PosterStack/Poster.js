import React from 'react'

import { animated, interpolate } from 'react-spring'

const Poster = ({ i, springProps, trans, bind, cards }) => {
  const { x, y, rot, scale } = springProps
  const image = cards[i]['pic']
  const title = cards[i]['title']

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
        }}
      >
        <img src={image} alt="poster" />
        <p>{title}</p>
      </animated.div>
    </animated.div>
  )
}

export default Poster
