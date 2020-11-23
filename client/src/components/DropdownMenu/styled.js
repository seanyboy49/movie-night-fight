import styled from 'styled-components'

export const Menu = styled.div`
  position: absolute;
  box-shadow: ${({ isOpen }) => (isOpen ? '0 8px 6px -6px black' : undefined)};
  width: 100%;

  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-in-out;
`
