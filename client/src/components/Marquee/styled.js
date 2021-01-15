import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

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
  width: 98vw;
  ${alignCenter}
`

export const InfoContainer = styled.div`
  height: 85px;
  width: 97vw;
  background-color: white;
  border-radius: 10px;
  ${alignCenter}

  @media screen and (max-width: 414px) {
    width: 93vw;
  }
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

  @media screen and (max-width: 414px) {
    font-size: ${(props) => props.mediaSize}px;
  }
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

export const Add = styled(Link)`
  background-color: black;
  border: 2px solid white;
  padding: 3px 11px 0px 11px;
  outline: none;
  cursor: pointer;
  text-decorator: none;
`
