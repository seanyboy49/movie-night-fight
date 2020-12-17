import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ToastWrapper, ToastText } from './styled'

const Toast = () => {
  const toastState = useSelector((state) => state.toast)
  const dispatch = useDispatch()

  const isActive = Object.keys(toastState).length > 0

  if (!isActive) {
    return null
  }

  return (
    <ToastWrapper
      onClick={() => dispatch({ type: 'REMOVE' })}
      backgroundColor={toastState.color}
      trigger={isActive}
    >
      <ToastText>{toastState.message}</ToastText>
    </ToastWrapper>
  )
}

export default Toast
