import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Ticket = styled.div`
  background-color: black;
  width: ${(props) => props.width || '176'}px;
  height: ${(props) => props.height || '64'}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 6px -6px #777;
`

export const AddLeftCutout = styled.div`
  position: absolute;
  background-color: white;
  left: -1%;
  top: 30%;
  width: 10px;
  height: 22px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: none;
`

export const AddRightCutout = styled.div`
  position: absolute;
  background-color: white;
  right: -1%;
  top: 30%;
  width: 10px;
  height: 22px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-right: none;
`

export const Content = styled(Link)`
  background-color: transparent;
  font-family: Bebas Neue;
  font-size: 27px;
  color: white;
  text-decoration: none;
  border: 4px solid white;
  padding: 5px 10px;
`
