import React from 'react'
import { ToastWrapper, ToastText } from './styled'

const Toast = () => {
  return (
    <ToastWrapper backgroundColor={'#FF0E0E'}>
      <ToastText>Something went wrong. Please try again.</ToastText>
    </ToastWrapper>
  )
}

export default Toast
