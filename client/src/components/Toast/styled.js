import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  0% {
      transform: translate(-50%, 100%);
    }
  100% {
      transform: translate(-50%, 0);
    }
`

const slideDown = keyframes`
  0% {
      transform: translate(-50%, 0);
    }
  100% {
      transform: translate(-50%, 100%);
    }
`

export const ToastWrapper = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  width: 300px;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  animation: ${({ isActive }) => (isActive ? slideUp : slideDown)} 0.1s ease-in;
  animation-fill-mode: forwards;
`
// animation-fill-mode: forwards;
// Preserves final state of keyframe animation, otherwise
// the element reverts to initial state.
// https://stackoverflow.com/questions/12991164/maintaining-the-final-state-at-end-of-a-css3-animation

export const ToastText = styled.p`
  overflow-wrap: break-word;
  hyphens: auto;
  font-family: Bebas Neue;
  font-size: 24px;
  padding: 0 40px;
  margin: 15px 0;
`
