import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import borderImagePath from '../../images/dotted-border.svg'

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MarqueeBackground = styled.div`
  background-color: #d70808;
  height: 140px;
  width: 100vw;
  ${alignCenter};
  @media screen and (max-width: 414px) {
    background-image: url(${borderImagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 165px;
  }
  @media screen and (max-width: 375px) {
    height: 150px;
  }
`
export const DotBorder = styled.div`
  border: 10px dotted #fcff72;
  height: 90px;
  width: 98vw;
  ${alignCenter};

  @media screen and (max-width: 414px) {
    border: none;
  }
`

export const InfoContainer = styled.div`
  height: 85px;
  width: 97vw;
  background-color: white;
  border-radius: 10px;
  ${alignCenter}

  @media screen and (max-width: 414px) {
    width: 91vw;
    height: 85px;
  }

  @media screen and (max-width: 375px) {
    height: 80px;
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

  @media screen and (max-width: 414px) {
    width: 60px;
    height: 25px;
  }
`

export const Add = styled(Link)`
  background-color: black;
  border: 2px solid white;
  padding: 3px 11px 0px 11px;
  outline: none;
  cursor: pointer;
  text-decorator: none;

  @media screen and (max-width: 414px) {
    padding: 0px 9px 0px 9px;
  }
`
