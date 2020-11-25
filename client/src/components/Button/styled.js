import styled, { keyframes } from 'styled-components'

export const ButtonContainer = styled.div`
  background-color: black;
  width: 187px;
  height: 76px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 6px -6px #777;
`

export const LeftCutout = styled.div`
  position: absolute;
  background-color: white;
  left: 0px;
  top: 30%;
  width: 12px;
  height: 25px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: none;
`

export const RightCutout = styled.div`
  position: absolute;
  background-color: white;
  left: 95%;
  top: 30%;
  width: 12px;
  height: 25px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-right: none;
`

export const TicketButton = styled.div`
  border: 5px solid white;
  font-family: bebas neue;
  font-size: 27px;
  color: white;
  padding: ${(props) => props.padding || '6px 25px'};
  cursor: pointer;
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
