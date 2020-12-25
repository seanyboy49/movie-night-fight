import React from 'react'

import { animated, interpolate } from 'react-spring'

const Poster = ({ i, springProps, trans, bind, movies }) => {
  const { x, y, rot, scale } = springProps
  const image = movies[i]['poster_url']
  const title = movies[i]['name']

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
