import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Menu = styled.div`
  background: ${(props) => props.background || 'white'};
  left: 0;
  position: absolute;
  width: 100vw;
  transition: transform 0.3s ease-in-out;
  color: ${(props) => props.color || 'black'};
  z-index: 1;

  box-shadow: ${({ isOpen }) =>
    isOpen ? '0 8px 6px -6px black' : 'undefined'};

  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(57%)' : 'translateY(-100%)'};

  p {
    text-align: center;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color || 'white'};
`
