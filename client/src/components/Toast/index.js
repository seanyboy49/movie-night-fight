import React from 'react'
import { ToastWrapper, ToastText } from './styled'
import { useSelector, useDispatch } from 'react-redux'

const Toast = () => {
  const toast = useSelector((state) => state.toast)
  const dispatch = useDispatch()

  return (
    <ToastWrapper backgroundColor={'#FF0E0E'}>
      <ToastText>Something went wrong. Please try again.</ToastText>
      <button onClick={() => dispatch({ type: 'SUCCESS' })}>set me</button>
    </ToastWrapper>
  )
}

export default Toast
