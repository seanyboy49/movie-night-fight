import React from 'react'
import PropTypes from 'prop-types'

import SwipeRightImg from '../../images/SwipeRightImg'
import SwipeLeftImg from '../../images/SwipeLeftImg'
import { NUXLayer, Text } from './styled'

const NUX = ({ instructions }) => {
  if (!instructions) return null

  if (instructions === 'left') {
    return (
      <NUXLayer>
        <Text>SWIPE LEFT</Text>
        <Text>TO PASS ON</Text>
        <Text>THIS FILM</Text>
        <SwipeLeftImg />
      </NUXLayer>
    )
  } else if (instructions === 'right') {
    return (
      <NUXLayer>
        <Text>SWIPE RIGHT</Text>
        <Text>TO CHOOSE</Text>
        <Text>THIS FILM</Text>
        <SwipeRightImg />
      </NUXLayer>
    )
  }
}

NUX.propTypes = {
  instructions: PropTypes.string,
}

export default NUX
