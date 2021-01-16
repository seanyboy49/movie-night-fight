import styled from 'styled-components'

export const Background = styled.div`
  min-height: 90vh;
  background-color: #d70808;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

export const MovieListBackground = styled.div`
  background-color: #ffecb4;
  height: ${(props) => props.height || '90vh'};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
`

export const TurnBackground = styled.div`
  background-color: #ffecb4;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

export const PosterContainer = styled.div`
  position: relative;
  overflow: hidden;
  user-select: none;
  overscroll-behavior-y: contain;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
