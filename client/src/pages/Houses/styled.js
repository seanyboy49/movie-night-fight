import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import confusedPath from '../../images/confused.svg'

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const HousesContainer = styled.div`
  min-height: 90vh;
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

  &:hover {
    background-color: black;
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        border: 3px solid #ff0e0e;
      `
    )
  }}
`

export const CreateHouseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-text: left;
  flex-direction: column;
  font-size: 30px;
  width: 335px;
`

export const HouseRedirectLink = styled(Link)`
  text-decoration: none;
  outline: none;
  color: black;

  &:hover {
    color: ${(props) => props.color || 'white'};
  }
`
