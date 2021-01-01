import styled from 'styled-components'

import search from '../images/search.svg'

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const SearchImg = styled.img.attrs({
  src: `${search}`,
  alt: 'search',
})``
