import styled from 'styled-components'

export const AppTitle = styled.h1`
  font-family: bevan;
  font-size: 25px;
  color: ${(props) => props.color || 'black'};
  margin: 0;
`

export const NavContainer = styled.div`
  background-color: ${(props) => props.background || 'white'};
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${(props) => props.background || '#e5e5e5'};

  > * {
    margin-left: auto;
  }
`

export const Nav = styled.div`
  width: 100%;
  height: 10vh;
`
