import styled from 'styled-components'

export const StackContainer = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  overflow: hidden;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      background-color: white;
      background-size: auto 85%;
      background-repeat: no-repeat;
      background-position: center center;
      width: 30vh;
      height: 50vh;
      will-change: transform;
      border-radius: 10px;
      box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
        0 10px 10px -10px rgba(50, 50, 73, 0.3);
    }
  }
`
