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

export const HousesComponentContainer = styled.div`
  margin-top: 20px;
  ${alignCenter}
`

export const Img = styled.img`
  margin-top: 20px;
`

export const SearchBar = styled.div`
  ${alignCenter}
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 15px;
  border: 1px solid #e5e5e5;
  width: 330px;
  height: 38px;
  padding: 0 10px;
`

export const SearchInput = styled.input`
  border: none;
  width: 390px;
  outline: none;
  font-family: Bebas Neue;
  font-size: 24px;
  margin-left: 5px;
`
