import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotationKeyFrames = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform:rotateZ(-50deg);
  }
`
const AnimationContainer = styled.div`
  animation: ${rotationKeyFrames} infinite ease alternate-reverse 1s;
`

const SwipeLeftImg = () => {
  return (
    <AnimationContainer>
      <svg
        width="170"
        height="228"
        viewBox="0 0 170 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56 228V211L32.5 188L27 167.5L15 146L20.5 134H32.5L50.5 163.5V77.5L60.5 71L71.5 77.5V120.5M71.5 134V120.5M71.5 120.5L81 113.5L90 120.5M90 120.5V134M90 120.5L102 113.5L110.5 120.5M110.5 120.5V134M110.5 120.5L122.5 113.5L131 120.5L130 172.5L115.5 211V228"
          stroke="white"
          strokeWidth="7"
        />
        <path
          d="M160.097 58.7871C127.571 11.2024 61.1882 -4.07179 5.26771 56.262"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M3.80042 22.4068L4.35947 58.9025L40.4012 61.3508"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </AnimationContainer>
  )
}

export default SwipeLeftImg
