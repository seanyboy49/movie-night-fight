import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ToastWrapper, ToastText } from './styled'
import { remove } from '../../state/actions'

const Toast = () => {
  const { color, message, isActive } = useSelector((state) => state.toast)
  const dispatch = useDispatch()

  // Auto remove the toast after 3 seconds
  useEffect(() => {
    if (isActive) {
      setTimeout(() => dispatch(remove()), 3000)
    }
  }, [isActive, dispatch])

  return (
    <ToastWrapper
      onClick={() => dispatch(remove())}
      backgroundColor={color}
      isActive={isActive}
    >
      <ToastText>{message}</ToastText>
    </ToastWrapper>
  )
}

export default Toast
