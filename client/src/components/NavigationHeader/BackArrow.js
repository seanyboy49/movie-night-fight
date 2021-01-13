import React from 'react'
import { Link } from 'react-router-dom'

import leftArrowImg from '../../images/arrow-left.svg'

const BackArrow = ({ backLink }) => {
  // placeholder div to evenly space sibling elements in flex parent
  if (!backLink) {
    return <div style={{ width: '2rem', height: '2rem' }}></div>
  }
  return (
    <Link to={backLink}>
      <img src={leftArrowImg} alt="" />
    </Link>
  )
}

export default BackArrow
