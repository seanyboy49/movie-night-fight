import styled, { css } from 'styled-components'

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const HousesContainer = styled.div`
  height: 90vh;
  ${alignCenter};
  justify-content: flex-start;
`

export const NoHousesContainer = styled.div`
  margin-top: 20px;
  ${alignCenter}
`

export const Img = styled.img`
  margin-top: 20px;
`
