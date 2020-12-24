import React from 'react'
import { animated, interpolate } from 'react-spring'
import poster from '../../images/movie-posters/coco.jpg'

const Poster = ({ i, x, y, rot, scale, trans, bind, cards }) => {
  const card = cards[i]['pic']
  const image = `../../images/${card}`
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
        <img src={card} alt="poster" />
        <p>{title}</p>
      </animated.div>
    </animated.div>
  )
}

export default Poster
