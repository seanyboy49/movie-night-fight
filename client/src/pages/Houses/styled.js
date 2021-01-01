import styled, { css } from 'styled-components'

import confusedPath from '../../images/confused.svg'

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

export const HousesComponentContainer = styled.div`
  margin-top: 20px;
  ${alignCenter};
`

export const ConfusedPersonImg = styled.img.attrs({
  src: `${confusedPath}`,
  alt: "doesn't exist",
})`
  margin-top: 20px;
`

export const HouseContainer = styled.div`
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  padding: 20px;
  margin: 20px 0;
`
