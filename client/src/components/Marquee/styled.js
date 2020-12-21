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
`
