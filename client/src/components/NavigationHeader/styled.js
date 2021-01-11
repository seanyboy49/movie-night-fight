import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AppTitle = styled(Link)`
  text-decoration: none;
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
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.background || '#e5e5e5'};
`

export const Nav = styled.div`
  width: 100%;
  height: 10vh;
`
