import React from 'react'
import styled, { keyframes } from 'styled-components'

const upAndDownKeyFrames = keyframes` 
    0%, 100% {
      bottom: 0;
    }
    50% {
      bottom: 100px;
    }
`
const AnimationContainer = styled.div`
  animation: ${upAndDownKeyFrames} infinite ease alternate-reverse 1s;
`

const SwipeDownImg = () => {
  return (
    <AnimationContainer>
      <svg
        width="124"
        height="274"
        viewBox="0 0 124 274"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45 274V257L21.5 234L16 213.5L4 192L9.5 180H21.5L39.5 209.5L39.5 123.5L49.5 117L60.5 123.5V166.5M60.5 180V166.5M60.5 166.5L70 159.5L79 166.5M79 166.5V180M79 166.5L91 159.5L99.5 166.5M99.5 166.5V180M99.5 166.5L111.5 159.5L120 166.5L119 218.5L104.5 257V274"
          stroke="white"
          strokeWidth="7"
        />
        <line
          x1="60"
          y1="3"
          x2="60"
          y2="82"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </AnimationContainer>
  )
}

export default SwipeDownImg
