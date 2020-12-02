import styled from 'styled-components'

export const ToastWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  width: 300px;
  padding: 0 20px;
`

export const ToastText = styled.p`
  overflow-wrap: break-word;
  hyphens: auto;
  font-family: Bebas Neue;
  font-size: 24px;
  padding: 0 40px;
`
