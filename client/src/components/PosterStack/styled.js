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
      height: 425px;
      width: 250px;
      will-change: transform;
      border-radius: 10px;
      box-shadow: 0 8px 30px -15px rgba(50, 50, 73, 0.4),
        0 10px 10px -10px rgba(50, 50, 73, 0.3);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;

      img {
        width: 85%;
        height: 80%;
        margin: 20px 10px 5px 10px;
        object-fit: cover;
        pointer-events: none;
      }
      p {
        font-size: 20px;
        margin: 0;
        text-align: center;
      }
    }
  }
`
