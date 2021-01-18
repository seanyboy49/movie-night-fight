import React from 'react'
import PropTypes from 'prop-types'

import SwipeRightImg from '../../images/SwipeRightImg'
import SwipeLeftImg from '../../images/SwipeLeftImg'
import SwipeDownImg from '../../images/SwipeDownImg'
import { Layer, Text } from './styled'

const categoryMap = {
  nuxSwipeLeft: {
    texts: ['SWIPE LEFT', 'TO PASS ON', 'THIS FILM'],
    img: <SwipeLeftImg />,
  },
  nuxSwipeRight: {
    texts: ['SWIPE RIGHT', 'TO CHOOSE', 'THIS FILM'],
    img: <SwipeRightImg />,
  },
  nuxSwipeDown: {
    texts: ['SWIPE DOWN', 'TO REMOVE', 'THIS FILM'],
    img: <SwipeDownImg />,
  },
}

export const categories = Object.keys(categoryMap).reduce((acc, curr) => {
  return { ...acc, [curr]: curr }
}, {})

const LightBox = ({ category }) => {
  if (!category) return null

  const components = categoryMap[category]

  return (
    <Layer>
      {components.texts.map((text) => (
        <Text key={text}>{text}</Text>
      ))}
      {components.img}
    </Layer>
  )
}

LightBox.propTypes = {
  instructions: PropTypes.string,
}

export default LightBox
