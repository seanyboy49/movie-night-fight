import styled from 'styled-components'
import { Link } from 'react-router-dom'

// export const PromptLink = styled(Link)`
//   font-family: Bebas Neue;
//   font-size: 24px;
//   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   margin: 15px 0 25px 0;
//   text-decoration: none;
//   color: black;
// `

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
