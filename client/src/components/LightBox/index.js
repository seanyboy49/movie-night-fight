import React from 'react'
import PropTypes from 'prop-types'

import SwipeRightImg from '../../images/SwipeRightImg'
import SwipeLeftImg from '../../images/SwipeLeftImg'
import { NUXLayer, Text } from './styled'

const categoryMap = {
  nuxSwipeLeft: {
    texts: ['SWIPE LEFT', 'TO PASS ON', 'THIS FILM'],
    img: <SwipeLeftImg />,
  },
  nuxSwipeRight: {
    texts: ['SWIPE RIGHT', 'TO CHOOSE', 'THIS FILM'],
    img: <SwipeRightImg />,
  },
  nuxSwipeDown: 'nuxSwipeDown',
}

// Returns and object generated from categoryMap keys where
// the keys and values are the same
// example return value
// {
//  nuxSwipeLeft: "nuxSwipeLeft"
//  nuxSwipeRight: "nuxSwipeRight"
// }

export const categories = Object.keys(categoryMap).reduce((acc, curr) => {
  return { ...acc, [curr]: curr }
}, {})

const LightBox = ({ category }) => {
  if (!category) return null

  const components = categoryMap[category]

  return (
    <NUXLayer>
      {components.texts.map((text) => (
        <Text>{text}</Text>
      ))}
      {components.img}
    </NUXLayer>
  )
}

LightBox.propTypes = {
  instructions: PropTypes.string,
}

export default LightBox