import React, { useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import Poster from './Poster'
import { StackContainer } from './styled'
import cocoImagePath from '../../images/movie-posters/coco.jpg'
import callmeImagePath from '../../images/movie-posters/call-me-by-your-name.jpg'
import wonderWomanImagePath from '../../images/movie-posters/wonder-woman.jpg'
import crazyRichAsiansImagePath from '../../images/movie-posters/crazy-rich-asians.jpg'
import endgameImagePath from '../../images/movie-posters/endgame.jpg'
import jojoImagePath from '../../images/movie-posters/jojo-rabbit.jpg'

const cards = [
  {
    pic: callmeImagePath,
    title: 'Call Me By Your Name',
  },
  { pic: cocoImagePath, title: 'Coco' },
  { pic: crazyRichAsiansImagePath, title: 'Crazy Rich Asians' },
  { pic: endgameImagePath, title: 'Avenger: Endgame' },
  { pic: jojoImagePath, title: 'JoJo Rabbit' },
  { pic: wonderWomanImagePath, title: 'Wonder Woman' },
]

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

function PosterStack() {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }))

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

      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600)
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
          cards={cards}
          bind={bind}
        />
      ))}
    </StackContainer>
  )
}

export default PosterStack
