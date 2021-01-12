import styled from 'styled-components'

import search from '../images/search.svg'
import clearImagePath from '../images/delete.svg'

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

export const Button = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ClearImg = styled.img.attrs({
  src: `${clearImagePath}`,
  alt: 'clear input',
})``

export const ResultUl = styled.ul`
  margin: 0;
  padding: 0;
`

export const ResultLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 335px;
  margin: 10px 0;
  font-size: 24px;
  padding: 10px;

  &:hover {
    background-color: ${(props) => props.background || 'white'};
  }
`
