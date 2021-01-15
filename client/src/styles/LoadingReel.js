import styled, { keyframes, css } from 'styled-components'
import reel from '../images/film-reel.svg'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const ReelImage = styled.img.attrs({
  src: `${reel}`,
  alt: 'reel',
})`
  animation: ${spin} 3s linear infinite;
  width: 92px;
  margin-top: ${(props) => props.margin || 0}
    ${(props) => {
      return (
        !props.isActive &&
        css`
          opacity: 0;
        `
      )
    }};
`
