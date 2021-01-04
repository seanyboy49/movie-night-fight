import styled, { css } from 'styled-components'

import clear from '../../images/delete.svg'

export const SearchMovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 80vh;
`

export const MovieLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 325px;
  margin: 10px 0;
`
export const MovieTitleContainer = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
`

export const MovieUl = styled.ul`
  margin: 0;
  padding: 0;
`

export const Button = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
`

export const MovieDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
  height: 0;
  overflow: hidden;
  ${(props) => {
    return (
      props.isActive &&
      css`
        height: 190px;
      `
    )
  }};
`

export const AddButton = styled.div`
  background-color: transparent;
  border: 3px solid white;
  color: white;
  font-family: Bebas Neue;
  font-size: 27px;
  padding: 5px 20px;
  cursor: pointer;
`

export const ClearImg = styled.img.attrs({
  src: `${clear}`,
  alt: 'clear input',
})``
