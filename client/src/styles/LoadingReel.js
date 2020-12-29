import styled, { keyframes, css } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const ReelImage = styled.img`
  animation: ${spin} 3s linear infinite;
  width: 92px;

  ${(props) => {
    return (
      !props.isActive &&
      css`
        opacity: 0;
      `
    )
  }}
`
