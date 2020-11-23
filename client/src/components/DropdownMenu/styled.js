import styled from 'styled-components'

export const Menu = styled.div`
  background: white;
  position: absolute;
  width: 100%;
  transition: transform 0.3s ease-in-out;

  box-shadow: ${({ isOpen }) =>
    isOpen ? '0 8px 6px -6px black' : 'undefined'};

  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(80%)' : 'translateY(-100%)'};

  p {
    text-align: center;
  }

  p:not(:last-child) {
    :after {
      content: '';
      border-bottom: 1px solid black;
    }
  }
`
