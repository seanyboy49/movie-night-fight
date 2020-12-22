import styled, { css } from 'styled-components'

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MarqueeBackground = styled.div`
  background-color: #d70808;
  height: 121px;
  width: 100vw;
  ${alignCenter}
`
export const DotBorder = styled.div`
  border: 10px dotted #fcff72;
  height: 90px;
  width: 96vw;
  ${alignCenter}
`

export const InfoContainer = styled.div`
  height: 85px;
  width: 93vw;
  background-color: white;
  border-radius: 10px;
  ${alignCenter}
`

export const MarqueeSide = styled.div`
  flex-grow: 1;
  border-right: ${(props) => props.border || '2px solid #888888'};
  height: 100%;
  ${alignCenter}
  flex-direction: column;
`

export const MarqueeCenter = styled.div`
  flex-grow: 2;
  ${alignCenter}
  flex-direction: column;
  height: 100%;
  border-right: 2px solid #888888;
`

export const Text = styled.div`
  font-size: ${(props) => props.size}px;
`

export const AddTicket = styled.div`
  width: 70px;
  height: 30px;
  background-color: black;
  padding: 7px;
  position: relative;
  ${alignCenter}
  transform: rotate(-15deg);
`

export const Add = styled.button`
  background-color: black;
  border: 2px solid white;
  padding: 0 11px;
  outline: none;
  cursor: pointer;
`

export const AddImage = styled.img`
  width: 20px;
`
export const AddLeftCutout = styled.div`
  position: absolute;
  background-color: white;
  left: -1%;
  top: 30%;
  width: 9px;
  height: 18px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: none;
`

export const AddRightCutout = styled.div`
  position: absolute;
  background-color: white;
  right: -1%;
  top: 30%;
  width: 9px;
  height: 18px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-right: none;
`
