import styled from 'styled-components'

export const NUXLayer = styled.div`
  position: absolute;
  z-index: 100;
  background: black;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  color: white;
  text-align: center;
  font-family: Bebas Neue;
  font-size: 67px;
  margin: 0;
`
