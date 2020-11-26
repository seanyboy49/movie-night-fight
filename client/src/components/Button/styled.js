import styled, { keyframes } from 'styled-components'

export const ButtonContainer = styled.div`
  background-color: black;
  position: relative;
  display: inline-block;
  padding: 10px 30px 10px 30px;
  box-shadow: 0 10px 6px -6px #777;
  border: none;
  margin: 10px;
`

export const LeftCutout = styled.div`
  position: absolute;
  background-color: white;
  left: 0%;
  top: 35%;
  width: 12px;
  height: 25px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: none;
`

export const RightCutout = styled.div`
  position: absolute;
  background-color: white;
  right: 0%;
  top: 35%;
  width: 12px;
  height: 25px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-right: none;
`

export const TicketButton = styled.button`
  border: 5px solid white;
  font-family: bebas neue;
  font-size: 27px;
  color: white;
  padding: ${(props) => props.padding || '6px 25px'};
  cursor: pointer;
  background-color: transparent;
`

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
`
