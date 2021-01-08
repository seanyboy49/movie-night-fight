import styled, { css } from 'styled-components'

export const SearchMovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 80vh;
`

export const MovieTitleContainer = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
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
