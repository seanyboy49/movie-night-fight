import styled from 'styled-components'

export const TurnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 20px 0;
`

export const TurnsBoard = styled.div`
  width: 324px;
  background-color: #d70808;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoContainer = styled.div`
  width: 288px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Bevan;
  font-size: 18px;
  margin: 15px 0;
`

export const Categories = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Turn = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Bebas Neue;
  font-size: 18px;
  border-top: 1px solid #e5e5e5;
`

export const User = styled.p`
  margin: 10px 5px;
`

export const Title = styled.p`
  margin: 10px 5px;
  overflow-x: scroll;
  user-select: none;
  will-change: transform;
  white-space: nowrap;
  width: 60%;
  text-align: right;
`
