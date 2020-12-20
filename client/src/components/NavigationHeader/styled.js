import styled from 'styled-components'

export const AppTitle = styled.h1`
  font-family: bevan;
  font-size: 25px;
  color: ${(props) => props.color || 'black'};
`

export const NavContainer = styled.div`
  background-color: ${(props) => props.background || 'white'};
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.background || 'white'};

  > * {
    margin-left: auto;
  }
`

export const Nav = styled.div`
  width: 100%;
`
